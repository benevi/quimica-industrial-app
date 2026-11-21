import type { Lesson } from "./types";
import { mantenimientoAFondo } from "./nivel14-mantenimiento";
import { gasesDePlantaAFondo } from "./nivel14-gases";

const servicios: Lesson[] = [
  {
    slug: "agua-farmaceutica",
    level: 14,
    order: 1,
    title: "Agua: potable, purificada y para inyectables",
    titleEn: "Water: potable, purified and water for injections",
    minutes: 15,
    summary: "Las calidades de agua de una planta farmacéutica, cómo se producen y cómo se controlan.",
    body: `
### Por qué el agua es un "material" más
El agua que toca el producto (en reacciones, lavados, limpieza final) puede aportarle **impurezas, microorganismos o endotoxinas**. Por eso se trata como una materia prima con especificación.

### Calidades
| Calidad | En inglés | Uso típico en API |
|---|---|---|
| Agua potable | *Potable / drinking water* | Mínimo exigido por ICH Q7 para el proceso; servicios, limpiezas iniciales |
| Agua purificada (PW) | *Purified water* | Etapas finales, lavados del API, aclarados finales |
| Agua para inyectables (WFI) | *Water for injections* | API estériles o destinados a inyectables, cuando el cliente lo exige |

Las monografías de la **Farmacopea Europea** (*Purified water*, *Water for injections*) fijan los requisitos. Valores clave:
- **Conductividad** (*conductivity*): indica sales disueltas. PW: ≤ 5,1 µS/cm a 25 °C; WFI: ≤ 1,3 µS/cm a 25 °C (ensayo en línea, etapa 1).
- **TOC** (*Total Organic Carbon*, carbono orgánico total): ≤ 0,5 mg/L.
- **Microbiología** (límites de acción): PW ≤ 100 UFC/mL; WFI ≤ 10 UFC/100 mL.
- **Endotoxinas** (solo WFI): < 0,25 UI/mL.

### Cómo se produce el agua purificada
1. **Pretratamiento**: filtros, descalcificador (*softener*), carbón activo o bisulfito (quitar el cloro).
2. **Ósmosis inversa** (*reverse osmosis, RO*): membrana que retiene sales y casi todo lo demás.
3. **Electrodesionización** (*EDI*) para pulir.
4. **Almacenamiento y bucle** (*storage tank and loop*): el agua circula continuamente por un **anillo** de acero inoxidable, sin zonas muertas, con lámpara **UV** u **ozono**, o en caliente, para que no crezcan bacterias.

La WFI se obtiene por **destilación** o por un sistema de membranas equivalente aprobado por la farmacopea, y se mantiene normalmente caliente.

### Qué hace el operador
- Usar solo los **puntos de uso** (*points of use*) indicados, purgando antes si el procedimiento lo pide.
- No conectar mangueras sucias ni dejar mangueras sumergidas.
- Respetar el plan de **muestreo** del agua y avisar de alarmas de conductividad o TOC del sistema.
`,
    plant: `
La hoja indica "Lavar la torta con 200 L de agua purificada del punto de uso PU-07". La pantalla del sistema de agua muestra una alarma de conductividad alta. El operador no usa el agua, avisa y espera a que Calidad y Mantenimiento confirmen que el sistema está en especificación.
`,
    batchRecord: `
- Tipo de agua y punto de uso.
- Volumen usado.
- Comprobación de que el sistema no tenía alarmas activas.
`,
    terms: [
      { es: "Agua purificada", en: "Purified water (PW)", def: "Agua tratada que cumple la monografía de la farmacopea." },
      { es: "Agua para inyectables", en: "Water for injections (WFI)", def: "Agua de máxima calidad, con límite de endotoxinas." },
      { es: "Conductividad", en: "Conductivity", def: "Capacidad de conducir electricidad; indica sales disueltas." },
      { es: "Carbono orgánico total", en: "Total Organic Carbon (TOC)", def: "Medida de la materia orgánica disuelta." },
      { es: "Ósmosis inversa", en: "Reverse osmosis (RO)", def: "Membrana que retiene sales y contaminantes del agua." },
      { es: "Bucle de distribución", en: "Distribution loop", def: "Anillo por el que circula el agua continuamente hasta los puntos de uso." },
      { es: "Punto de uso", en: "Point of use", def: "Toma del bucle de agua donde se usa en planta." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué calidad de agua exige ICH Q7 como mínimo en la fabricación de API?",
        options: ["Ninguna", "Agua potable", "Agua de pozo sin tratar", "WFI siempre"],
        answer: 1,
        explain: "Q7 pide como mínimo agua potable; calidades superiores cuando el proceso o el cliente lo exigen.",
      },
      {
        kind: "choice",
        q: "¿Por qué el agua purificada circula continuamente en un bucle?",
        options: [
          "Para gastar energía",
          "Para evitar agua estancada donde crecen bacterias",
          "Para enfriarla",
          "Por estética",
        ],
        answer: 1,
        explain: "El agua parada favorece el crecimiento microbiano y la formación de biofilm.",
      },
      {
        kind: "choice",
        q: "¿Qué indica una conductividad alta en el agua purificada?",
        options: ["Que hay más sales disueltas de lo permitido", "Que está fría", "Que hay demasiado caudal", "Nada"],
        answer: 0,
        explain: "La conductividad mide los iones disueltos: si sube, el agua no cumple.",
      },
    ],
  },
  {
    slug: "aire-y-nitrogeno",
    level: 14,
    order: 3,
    title: "Aire comprimido, nitrógeno y vacío",
    titleEn: "Compressed air, nitrogen and vacuum",
    minutes: 12,
    summary: "Los gases de servicio de la planta y el peligro invisible del nitrógeno.",
    body: `
### Aire comprimido (*compressed air*)
- **Aire de instrumentos** (*instrument air*): mueve las válvulas neumáticas. Debe estar **seco** y **sin aceite**: si llega húmedo o sucio, las válvulas fallan.
- **Aire de servicio** (*plant air*): herramientas, bombas de membrana.
- **Aire respirable** (*breathing air*): para equipos de respiración con línea de aire; tiene requisitos propios.
- La calidad se especifica según **ISO 8573-1** (partículas, agua y aceite).

### Nitrógeno (*nitrogen*, N₂)
Uso principal: **inertizar** (quitar el oxígeno para evitar incendios y explosiones), presurizar transferencias, secar, proteger productos sensibles al oxígeno.
- Origen: **tanque de nitrógeno líquido** con evaporador o **generador PSA** (*Pressure Swing Adsorption*).
- Si el N₂ toca el producto, se trata como un material: **pureza** controlada y **filtración** (por ejemplo 0,2 µm) en el punto de uso.

### ⚠️ Asfixia por nitrógeno
El aire tiene un **20,9 %** de oxígeno. El nitrógeno **no huele, no se ve y no avisa**: desplaza el oxígeno y una persona puede perder el conocimiento en segundos sin notar nada. Es una causa conocida de muertes en la industria.
- Nunca asomar la cabeza por la boca de hombre de un reactor inertizado.
- **Espacios confinados**: solo con permiso, medición de O₂ y vigilancia.
- Respeta los **detectores de O₂** y las señales de zonas con riesgo de atmósfera pobre en oxígeno.

### Vacío (*vacuum*)
Para destilar, secar y transferir. Lo generan **bombas de vacío** (de anillo líquido, secas de tornillo…). Los vapores que salen se condensan antes de la bomba para recuperar disolvente y no contaminar.
`,
    plant: `
Un compañero quiere mirar dentro de un reactor vacío pero inertizado para ver si quedan restos. Le paras: el reactor contiene nitrógeno. Tampoco vale asomarse "solo un momento" con una linterna: junto a la boca de hombre abierta ya falta oxígeno. Si hay que mirar dentro sin entrar, se hace por la mirilla o con una cámara, con iluminación apta para zona ATEX y sin acercar la cara a la boca. Si hay que acercarse o entrar, primero se ventila, se mide el O₂ y se sigue el procedimiento de espacio confinado con su permiso.
`,
    batchRecord: `
- Comprobación de inertización: "O₂ ≤ x % (lectura del analizador)".
- Calidad del N₂ si toca el producto (filtro, integridad).
`,
    terms: [
      { es: "Aire de instrumentos", en: "Instrument air", def: "Aire seco y limpio que acciona válvulas e instrumentos." },
      { es: "Nitrógeno", en: "Nitrogen (N₂)", def: "Gas inerte usado para eliminar el oxígeno de los equipos." },
      { es: "Asfixia", en: "Asphyxiation", def: "Falta de oxígeno que puede causar pérdida de conocimiento y muerte." },
      { es: "Espacio confinado", en: "Confined space", def: "Espacio cerrado con riesgo de atmósfera peligrosa; requiere permiso." },
      { es: "Generador PSA", en: "Pressure Swing Adsorption generator", def: "Equipo que separa nitrógeno del aire." },
      { es: "Bomba de vacío", en: "Vacuum pump", def: "Equipo que extrae gas para bajar la presión." },
    ],
    quiz: [
      {
        kind: "number",
        q: "¿Qué porcentaje de oxígeno tiene el aire normal?",
        answer: 20.9,
        tolerance: 0.01,
        unit: "%",
        explain: "El aire tiene un 20,9 % de oxígeno; el resto es casi todo nitrógeno.",
      },
      {
        kind: "choice",
        q: "¿Por qué es tan peligroso el nitrógeno?",
        options: [
          "Porque es explosivo",
          "Porque desplaza el oxígeno sin dar ningún aviso",
          "Porque huele muy fuerte",
          "Porque es corrosivo",
        ],
        answer: 1,
        explain: "No se huele ni se ve: la asfixia puede llegar sin aviso.",
      },
      {
        kind: "choice",
        q: "¿Qué pasa si el aire de instrumentos llega húmedo y con aceite?",
        options: ["Nada", "Las válvulas neumáticas pueden fallar", "Mejora el control", "Se enfría el reactor"],
        answer: 1,
        explain: "El agua y el aceite dañan los actuadores y posicionadores.",
      },
    ],
  },
  {
    slug: "hvac-y-presiones",
    level: 14,
    order: 5,
    title: "HVAC: aire de las salas y cascada de presiones",
    titleEn: "HVAC: room air and pressure cascades",
    minutes: 12,
    summary: "Cómo el aire acondicionado protege el producto y a las personas.",
    body: `
### Qué es el HVAC
*Heating, Ventilation and Air Conditioning*: el sistema que trata el aire de las salas. En farma no es solo confort: controla
- **Limpieza del aire** con **filtros HEPA** (*High Efficiency Particulate Air*), que retienen al menos el 99,95 % de las partículas más difíciles de atrapar (clase H13).
- **Renovaciones de aire por hora** (*air changes per hour*): cuántas veces se sustituye el volumen de la sala.
- **Temperatura y humedad**.
- **Presión** de cada sala respecto a las vecinas.

### Cascada de presiones (*pressure cascade*)
El aire siempre va de **mayor a menor presión**. Se diseñan las salas para que el aire fluya en la dirección que protege:
- **Proteger el producto**: la sala limpia está a **más presión** que el pasillo, para que no entre suciedad.
- **Proteger a las personas y a otras zonas** (*containment*): una sala con producto potente o polvo está a **menos presión** que el entorno, para que el polvo no salga.
- A menudo se combinan con **esclusas** (*airlocks*) de presión intermedia (o "burbuja" / "sumidero").

Entre salas de distinta clasificación se suele pedir una diferencia de al menos **10 Pa** (valor orientativo del Anexo 1 de las GMP de la UE).

### Qué hace el operador
- Mirar los **manómetros diferenciales** (*differential pressure gauges*) de la sala al entrar, si el procedimiento lo pide.
- **No dejar puertas abiertas**: rompen la cascada. Muchas esclusas tienen enclavamiento para que no se abran las dos puertas a la vez.
- Avisar de alarmas de presión, temperatura o humedad.
- No tapar rejillas de impulsión ni de retorno.
`,
    plant: `
En la sala de envasado del API (con requisitos similares a un grado D; los grados A–D son del Anexo 1, pensado para estériles), el manómetro indica +15 Pa respecto al pasillo. Durante una carga, la puerta queda abierta y salta la alarma de presión. El operador la cierra, comprueba que se recupera y lo anota, porque el producto estaba expuesto en ese momento.
`,
    batchRecord: `
- Lectura de presiones diferenciales, temperatura y humedad al inicio de operaciones con producto expuesto.
- Alarmas de HVAC durante el lote.
`,
    terms: [
      { es: "HVAC", en: "Heating, Ventilation and Air Conditioning", def: "Sistema de tratamiento del aire de las salas." },
      { es: "Filtro HEPA", en: "HEPA filter", def: "Filtro de muy alta eficacia para partículas." },
      { es: "Renovaciones por hora", en: "Air changes per hour (ACH)", def: "Veces que se renueva el volumen de aire de una sala en una hora." },
      { es: "Cascada de presiones", en: "Pressure cascade", def: "Diferencias de presión entre salas que fijan la dirección del aire." },
      { es: "Esclusa", en: "Airlock", def: "Sala pequeña entre dos zonas que evita el paso directo de aire." },
      { es: "Contención", en: "Containment", def: "Medidas para que un producto no salga de su zona." },
      { es: "Pascal", en: "Pascal (Pa)", def: "Unidad de presión; 100 000 Pa = 1 bar." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Una sala de 100 m³ recibe 2000 m³/h de aire. ¿Cuántas renovaciones por hora tiene?",
        answer: 20,
        tolerance: 0.001,
        unit: "renovaciones/h",
        explain: "2000 / 100 = 20 renovaciones por hora.",
      },
      {
        kind: "choice",
        q: "Una sala donde se manipula un API muy potente suele estar…",
        options: [
          "A más presión que el pasillo",
          "A menos presión que el entorno, para que el polvo no salga",
          "Sin ventilación",
          "Con las puertas abiertas",
        ],
        answer: 1,
        explain: "La depresión mantiene el polvo dentro de la sala (contención).",
      },
      {
        kind: "number",
        q: "La sala A está a 45 Pa y el pasillo a 30 Pa. ¿Cuál es la diferencia de presión?",
        answer: 15,
        tolerance: 0.001,
        unit: "Pa",
        explain: "45 − 30 = 15 Pa: el aire va de la sala al pasillo.",
      },
    ],
  },
  {
    slug: "mantenimiento-gmp",
    level: 14,
    order: 7,
    title: "Mantenimiento en entorno GMP",
    titleEn: "Maintenance in a GMP environment",
    minutes: 15,
    summary: "Tipos de mantenimiento, órdenes de trabajo y cómo se devuelve un equipo a producción.",
    body: `
### Tipos de mantenimiento
| Tipo | En inglés | Qué es |
|---|---|---|
| Correctivo | *Corrective* | Reparar cuando falla |
| Preventivo | *Preventive* | Tareas planificadas por tiempo o uso (cambiar juntas cada x meses) |
| Predictivo | *Predictive* | Medir el estado (vibraciones, temperatura, termografía) para intervenir antes del fallo |
| Autónomo | *Autonomous (TPM)* | Pequeñas tareas que hace el propio operador: limpieza, inspección, reapriete, lubricación sencilla |

### Cómo se gestiona
- **Orden de trabajo** (*work order*) en un sistema de gestión de mantenimiento (**GMAO**, en inglés *CMMS, Computerized Maintenance Management System*).
- El operador **notifica la avería** (*maintenance request*) con la máxima información: equipo, síntoma, cuándo empezó.
- Antes de intervenir: **permiso de trabajo** y **aislamiento** del equipo (consignación, lo verás en el nivel 15).

### Lo que añade GMP
- **Diario de equipo** (*equipment logbook*): registro de uso, limpieza, mantenimiento y calibración de cada equipo.
- **Piezas y materiales**: las juntas y repuestos en contacto con el producto deben ser los **especificados** (mismo material). Los **lubricantes** que puedan tocar producto deben ser de **grado alimentario** (H1).
- **Cambio "igual por igual"** (*like-for-like*) frente a un **cambio**: si la pieza no es idéntica, hay que pasar por **control de cambios** y valorar si se requiere recualificación.
- **Devolución a producción**: tras el mantenimiento, el equipo se **limpia**, se comprueba que funciona y Producción (a veces Calidad) **acepta** el equipo antes de usarlo. Así se evita que queden herramientas, trapos o restos de grasa.
- Si la intervención afecta a un equipo **cualificado**, puede requerir pruebas de recualificación.

### Seguridad
Ninguna intervención sin **permiso** y sin **aislamiento** verificado (energías eléctricas, presión, producto, temperatura).
`,
    plant: `
El agitador del R-102 hace un ruido nuevo. El operador detiene el lote según el procedimiento, crea la solicitud de mantenimiento indicando "ruido metálico intermitente en el agitador desde las 14:10" y lo anota en el diario de equipo. Tras la reparación (cambio de rodamiento idéntico), el equipo se limpia y el jefe de turno lo acepta antes de reanudar.
`,
    batchRecord: `
- Incidencias de equipo durante el lote y referencia a la orden de trabajo.
- Diario de equipo actualizado.
- Aceptación del equipo tras mantenimiento.
`,
    terms: [
      { es: "Mantenimiento preventivo", en: "Preventive maintenance", def: "Tareas planificadas para evitar averías." },
      { es: "Mantenimiento predictivo", en: "Predictive maintenance", def: "Seguimiento del estado del equipo para anticipar el fallo." },
      { es: "Orden de trabajo", en: "Work order", def: "Documento que autoriza y registra una tarea de mantenimiento." },
      { es: "GMAO", en: "CMMS (Computerized Maintenance Management System)", def: "Programa de gestión del mantenimiento." },
      { es: "Diario de equipo", en: "Equipment logbook", def: "Registro de uso, limpieza y mantenimiento de un equipo." },
      { es: "Igual por igual", en: "Like-for-like", def: "Sustitución por una pieza idéntica, sin cambio de diseño." },
      { es: "Lubricante de grado alimentario", en: "Food-grade lubricant (H1)", def: "Lubricante apto para contacto incidental con producto." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Cambiar una junta de PTFE por una de otro material 'porque había' es…",
        options: [
          "Un cambio igual por igual",
          "Un cambio que requiere control de cambios y evaluación",
          "Correcto siempre",
          "Mantenimiento predictivo",
        ],
        answer: 1,
        explain: "Un material distinto puede reaccionar con el producto o el disolvente: hay que evaluarlo.",
      },
      {
        kind: "choice",
        q: "Tras una reparación, ¿qué pasa antes de volver a usar el equipo?",
        options: [
          "Nada, se usa",
          "Se limpia, se comprueba y Producción lo acepta (y Calidad si aplica)",
          "Solo se pinta",
          "Se espera una semana",
        ],
        answer: 1,
        explain: "La aceptación evita usar un equipo con restos, herramientas o funcionamiento incorrecto.",
      },
      {
        kind: "choice",
        q: "Medir vibraciones de un motor para anticipar una avería es mantenimiento…",
        options: ["Correctivo", "Predictivo", "Autónomo", "Ninguno"],
        answer: 1,
        explain: "Se mide el estado para intervenir antes del fallo.",
      },
    ],
  },
];

// Las lecciones «a fondo» van cada una en su archivo nivel14-tema.ts.
export const nivel14: Lesson[] = [...servicios, mantenimientoAFondo, gasesDePlantaAFondo];
