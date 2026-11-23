/**
 * Tarjetas de repaso rápido (flashcards): conceptos y fórmulas clave del temario.
 * Delante, la pregunta; detrás, la respuesta corta. Cada tarjeta apunta a la lección donde se explica.
 * Las ids son estables: el progreso (cajas Leitner) se guarda por id. No cambies una id ya publicada.
 */
export type Deck = { id: string; title: string; titleEn: string };

export type Card = {
  id: string;
  deck: string;
  front: string;
  /** Respuesta, en Markdown corto */
  back: string;
  lesson?: string;
};

export const decks: Deck[] = [
  { id: "formulas", title: "Fórmulas de la hoja", titleEn: "Shop-floor formulas" },
  { id: "unidades", title: "Unidades y conversiones", titleEn: "Units and conversions" },
  { id: "quimica", title: "Química básica", titleEn: "Chemistry basics" },
  { id: "equipos", title: "Equipos y operaciones", titleEn: "Equipment and unit operations" },
  { id: "seguridad", title: "Seguridad", titleEn: "Safety" },
  { id: "gmp", title: "GMP y documentación", titleEn: "GMP and documentation" },
  { id: "control", title: "Instrumentación y control", titleEn: "Instrumentation and control" },
  { id: "lab", title: "Laboratorio y calidad", titleEn: "Lab and QC" },
];

export const cards: Card[] = [
  // ── Fórmulas ───────────────────────────────────────────────────────────────
  { id: "f-moles", deck: "formulas", front: "¿Cómo pasas de gramos a moles?", back: "**n = m / M**\n\nmoles = masa (g) ÷ masa molar (g/mol).\n\nEj.: 80 g de NaOH (M = 40 g/mol) = 2 mol.", lesson: "el-mol" },
  { id: "f-masa-de-moles", deck: "formulas", front: "Necesitas 0,5 mol de un reactivo con M = 120 g/mol. ¿Cuánto pesas?", back: "**m = n × M** = 0,5 × 120 = **60 g**.", lesson: "el-mol" },
  { id: "f-densidad", deck: "formulas", front: "Fórmula de la densidad y cómo pasar litros a kilos", back: "**ρ = m / V**\n\nkg = litros × densidad (kg/L).\n\nEj.: 200 L de tolueno (0,87 kg/L) = 174 kg.", lesson: "densidad" },
  { id: "f-volumen-de-masa", deck: "formulas", front: "Te piden cargar 79 kg de metanol (0,79 kg/L). ¿Cuántos litros son?", back: "**V = m / ρ** = 79 / 0,79 = **100 L**.", lesson: "densidad" },
  { id: "f-molaridad", deck: "formulas", front: "Concentración molar (molaridad)", back: "**c = n / V**\n\nmol/L = moles de soluto ÷ litros de disolución.", lesson: "disoluciones" },
  { id: "f-dilucion", deck: "formulas", front: "Fórmula de la dilución", back: "**C₁ · V₁ = C₂ · V₂**\n\nLos moles (o gramos) de soluto no cambian al añadir disolvente.\n\nEj.: 1 L de una disolución de 50 g/L diluido a 5 L queda a 10 g/L.\n\nCon litros solo vale si la concentración es por volumen (mol/L, g/L). Si es en peso (% p/p), la misma cuenta se hace con kilos: C₁ · m₁ = C₂ · m₂.", lesson: "disoluciones" },
  { id: "f-porcentaje-mm", deck: "formulas", front: "¿Qué significa «disolución al 30 % m/m»?", back: "30 g de soluto por cada **100 g de disolución** (no de disolvente).\n\nEn 500 kg de HCl al 30 % hay 150 kg de HCl.", lesson: "disoluciones" },
  { id: "f-rendimiento", deck: "formulas", front: "Fórmula del rendimiento de un lote", back: "**Rendimiento (%) = obtenido real ÷ teórico × 100**\n\nEl teórico sale de la estequiometría con el reactivo limitante.", lesson: "rendimiento-y-balance" },
  { id: "f-equivalentes", deck: "formulas", front: "¿Qué son los «equivalentes» de una hoja de carga?", back: "Moles de un reactivo ÷ moles del reactivo de referencia (normalmente el limitante).\n\n1,2 eq = un 20 % más de moles que el de referencia.", lesson: "reactivo-limitante" },
  { id: "f-limitante", deck: "formulas", front: "¿Qué es el reactivo limitante?", back: "El que se acaba primero según la estequiometría. **Fija la cantidad máxima de producto** (rendimiento teórico).", lesson: "reactivo-limitante" },
  { id: "f-calor-sensible", deck: "formulas", front: "Calor para calentar una masa sin cambio de estado", back: "**Q = m · cp · ΔT**\n\ncp del agua ≈ 4,18 kJ/(kg·K).\n\nEj.: 1000 kg de agua de 20 a 30 °C ≈ 41 800 kJ.", lesson: "calor-vapor-intercambiadores" },
  { id: "f-gases", deck: "formulas", front: "Ley de los gases ideales", back: "**P · V = n · R · T**\n\nT siempre en kelvin. R = 0,082 atm·L/(mol·K) = 8,314 J/(mol·K).", lesson: "unidades-y-conversiones" },
  { id: "f-balance", deck: "formulas", front: "Balance de materia en un equipo (sin reacción)", back: "**Entra = Sale + Se acumula**\n\nEn continuo y estable: lo que entra = lo que sale.", lesson: "rendimiento-y-balance" },
  { id: "f-lod", deck: "formulas", front: "¿Cómo se calcula la pérdida por desecación (LOD)?", back: "**LOD (%) = (masa inicial − masa final) ÷ masa inicial × 100**\n\nEj.: de 5,000 g a 4,850 g: LOD = 3,0 %.", lesson: "secaderos" },
  { id: "f-ph", deck: "formulas", front: "Definición de pH", back: "**pH = −log [H⁺]**\n\nCada unidad de pH es un factor 10 de acidez. pH 7 neutro (25 °C), < 7 ácido, > 7 básico.", lesson: "acidos-bases-ph" },
  { id: "f-rsd", deck: "formulas", front: "¿Qué es el RSD (CV) y cómo se calcula?", back: "Desviación estándar relativa: **RSD (%) = s ÷ media × 100**.\n\nMide la repetibilidad: cuanto más bajo, mejor.", lesson: "calculo-y-expresion-de-resultados" },

  // ── Unidades ───────────────────────────────────────────────────────────────
  { id: "u-kelvin", deck: "unidades", front: "°C a kelvin", back: "**K = °C + 273,15**\n\n25 °C = 298,15 K. No hay temperaturas negativas en kelvin.", lesson: "unidades-y-conversiones" },
  { id: "u-presion", deck: "unidades", front: "Equivalencias de presión", back: "1 bar = 100 kPa = 0,1 MPa\n\n1 atm = 1,013 bar\n\n1 bar ≈ 14,5 psi", lesson: "unidades-y-conversiones" },
  { id: "u-barg", deck: "unidades", front: "Diferencia entre bar(g) y bar(a)", back: "**Absoluta = manométrica + atmosférica**\n\nbar(g): relativa a la atmósfera (lo que marca el manómetro).\n\nbar(a): desde el vacío total. 0 bar(g) ≈ 1,013 bar(a).", lesson: "medidas-de-proceso" },
  { id: "u-vacio", deck: "unidades", front: "Un secadero trabaja a 50 mbar(a). ¿Es mucho vacío?", back: "Sí: es un 5 % de la presión atmosférica (1013 mbar). Con vacío los disolventes **hierven a menor temperatura**.", lesson: "secaderos" },
  { id: "u-ppm", deck: "unidades", front: "¿Cuánto es 1 ppm en un sólido?", back: "1 mg por kg (1 parte por millón).\n\n1 % = 10 000 ppm.", lesson: "unidades-y-conversiones" },
  { id: "u-prefijos", deck: "unidades", front: "Prefijos: k, m, µ, n", back: "k = 10³ (kilo) · m = 10⁻³ (mili) · µ = 10⁻⁶ (micro) · n = 10⁻⁹ (nano).\n\n1 mg = 1000 µg.", lesson: "matematicas-utiles" },
  { id: "u-litro", deck: "unidades", front: "1 m³ son… litros", back: "**1000 L**. 1 L = 1 dm³ = 1000 mL; 1 mL = 1 cm³.", lesson: "unidades-y-conversiones" },
  { id: "u-caudal", deck: "unidades", front: "Una bomba da 6 m³/h. ¿Cuántos litros por minuto?", back: "6000 L ÷ 60 min = **100 L/min**.", lesson: "bombas" },
  { id: "u-cifras", deck: "unidades", front: "Regla habitual de redondeo (farmacopeas): ¿cómo queda 12,345 con dos decimales?", back: "**12,35** (el 5 sube). Redondear solo el resultado final, no los cálculos intermedios.", lesson: "calculo-y-expresion-de-resultados" },

  // ── Química básica ─────────────────────────────────────────────────────────
  { id: "q-mol", deck: "quimica", front: "¿Qué es un mol?", back: "La cantidad de sustancia con **6,022 · 10²³** partículas (número de Avogadro). Es «la docena» de los químicos.", lesson: "el-mol" },
  { id: "q-masa-molar", deck: "quimica", front: "¿Qué es la masa molar?", back: "La masa de 1 mol de una sustancia, en g/mol. Se suma con las masas atómicas: H₂O = 2 × 1 + 16 = 18 g/mol.", lesson: "el-mol" },
  { id: "q-acido-base", deck: "quimica", front: "Ácido y base, en una línea", back: "Ácido: cede H⁺ (pH < 7). Base: acepta H⁺ o da OH⁻ (pH > 7). Juntos se **neutralizan** dando sal y agua, con desprendimiento de calor.", lesson: "acidos-bases-ph" },
  { id: "q-exotermica", deck: "quimica", front: "Reacción exotérmica vs endotérmica", back: "**Exotérmica**: desprende calor (hay que refrigerar; riesgo de reacción descontrolada).\n\n**Endotérmica**: absorbe calor.", lesson: "calor-de-reaccion" },
  { id: "q-runaway", deck: "quimica", front: "¿Qué es una reacción descontrolada (runaway)?", back: "El calor que genera la reacción supera al que puede retirar la camisa: sube la temperatura, la reacción se acelera y genera aún más calor. Por eso las adiciones se hacen **dosificadas** y vigilando la temperatura.", lesson: "calor-de-reaccion" },
  { id: "q-catalizador", deck: "quimica", front: "¿Qué hace un catalizador?", back: "Acelera la reacción **sin consumirse**. No cambia el equilibrio ni el calor de reacción.", lesson: "velocidad-y-catalisis" },
  { id: "q-velocidad-t", deck: "quimica", front: "Regla práctica: ¿cuánto se acelera una reacción al subir 10 °C?", back: "Aproximadamente **el doble** (regla orientativa). Por eso pequeñas desviaciones de temperatura importan.", lesson: "velocidad-y-catalisis" },
  { id: "q-equilibrio", deck: "quimica", front: "¿Qué dice el principio de Le Chatelier?", back: "Si alteras un equilibrio, se desplaza para contrarrestar el cambio. Ej.: retirar el agua que se forma empuja la reacción hacia productos.", lesson: "equilibrio-quimico" },
  { id: "q-redox", deck: "quimica", front: "Oxidación y reducción", back: "**Oxidación**: pierde electrones. **Reducción**: gana electrones. Siempre van juntas (redox).", lesson: "oxidacion-reduccion" },
  { id: "q-solubilidad", deck: "quimica", front: "¿Por qué se enfría para cristalizar?", back: "Casi todos los sólidos son **menos solubles en frío**: al enfriar, la disolución se sobresatura y el producto cristaliza.", lesson: "cristalizacion" },
  { id: "q-polar", deck: "quimica", front: "«Lo semejante disuelve a lo semejante»: ¿qué significa?", back: "Los disolventes polares (agua, metanol) disuelven sustancias polares; los apolares (tolueno, heptano) las apolares. El agua y el tolueno no se mezclan.", lesson: "enlaces-y-polaridad" },
  { id: "q-quiral", deck: "quimica", front: "¿Qué son los enantiómeros?", back: "Moléculas quirales que son imágenes especulares no superponibles (como las manos). Pueden tener efectos farmacológicos distintos: uno puede ser una impureza.", lesson: "isomeros-y-quiralidad" },
  { id: "q-polimorfo", deck: "quimica", front: "¿Qué es el polimorfismo?", back: "Una misma molécula que cristaliza en formas cristalinas distintas, con distinta solubilidad y estabilidad. La forma correcta es una especificación del API.", lesson: "polimorfismo-y-sales" },
  { id: "q-impureza", deck: "quimica", front: "Tipos de impurezas según ICH", back: "**Orgánicas** (de proceso y degradación), **inorgánicas** (sales, metales) y **disolventes residuales** (ICH Q3C).", lesson: "impurezas-ich" },

  // ── Equipos ────────────────────────────────────────────────────────────────
  { id: "e-camisa", deck: "equipos", front: "¿Para qué sirve la camisa de un reactor?", back: "Por ella circula el fluido térmico (vapor, agua, salmuera, aceite) que **calienta o enfría** la masa sin tocarla.", lesson: "reactor-y-servicios" },
  { id: "e-reflujo", deck: "equipos", front: "¿Qué es trabajar a reflujo?", back: "Calentar a ebullición y condensar los vapores en el condensador, que vuelven al reactor. La temperatura queda fija en la de ebullición y no se pierde disolvente.", lesson: "reactor-y-servicios" },
  { id: "e-inertizar", deck: "equipos", front: "¿Para qué se inertiza un reactor con nitrógeno?", back: "Para bajar el oxígeno por debajo del que hace falta para una combustión y evitar una **atmósfera explosiva** al cargar disolventes o polvos.", lesson: "carga-e-inertizacion" },
  { id: "e-centrifuga", deck: "equipos", front: "¿Qué separa una centrífuga y qué sale de ella?", back: "Separa sólido de líquido por fuerza centrífuga. Sale la **torta** (sólido húmedo) y las **aguas madres** (filtrado). Después se **lava** la torta.", lesson: "centrifuga" },
  { id: "e-aguas-madres", deck: "equipos", front: "¿Qué son las aguas madres (mother liquor)?", back: "El líquido que queda tras separar los cristales. Lleva impurezas y algo de producto disuelto: se registra su volumen y destino.", lesson: "centrifuga" },
  { id: "e-nutsche", deck: "equipos", front: "¿Qué es un filtro-secador Nutsche?", back: "Un filtro cerrado con placa filtrante y agitador que **filtra, lava y seca** en el mismo equipo, sin exponer el producto.", lesson: "filtros" },
  { id: "e-secado-fin", deck: "equipos", front: "¿Cómo se sabe que un secado ha terminado?", back: "Con un análisis en proceso: **LOD o disolventes residuales** dentro del límite. No basta con el tiempo ni con la temperatura.", lesson: "secaderos" },
  { id: "e-vacio-secado", deck: "equipos", front: "¿Por qué se seca a vacío?", back: "Con vacío el disolvente se evapora a **menor temperatura**, así el producto no se degrada.", lesson: "secaderos" },
  { id: "e-cavitacion", deck: "equipos", front: "¿Qué es la cavitación de una bomba?", back: "El líquido hierve en la aspiración por baja presión y las burbujas implosionan: ruido de grava, vibración y daños. Causas: aspiración obstruida, líquido caliente, depósito bajo.", lesson: "bombas" },
  { id: "e-retencion", deck: "equipos", front: "¿Qué hace una válvula de retención (antirretorno)?", back: "Deja pasar el fluido **en un solo sentido** e impide que vuelva hacia atrás.", lesson: "tuberias-y-valvulas" },
  { id: "e-psv", deck: "equipos", front: "Válvula de seguridad vs disco de ruptura", back: "**Válvula de seguridad (PSV)**: abre por sobrepresión y vuelve a cerrar.\n\n**Disco de ruptura**: se rompe y queda abierto; hay que cambiarlo. Ambos protegen el equipo de reventar.", lesson: "alarmas-y-enclavamientos" },
  { id: "e-destilacion", deck: "equipos", front: "¿En qué se basa la destilación?", back: "En la **diferencia de puntos de ebullición**: se evapora lo más volátil y se condensa aparte.", lesson: "destilacion" },
  { id: "e-extraccion", deck: "equipos", front: "¿Qué es una extracción líquido-líquido?", back: "Pasar un compuesto de un líquido a otro que no se mezcla con él (p. ej. agua y tolueno), aprovechando que es más soluble en uno. Después se decanta y se separan las fases.", lesson: "extraccion-liquido-liquido" },
  { id: "e-limpieza", deck: "equipos", front: "¿Por qué se limpia un equipo entre lotes y cómo se demuestra?", back: "Para evitar la **contaminación cruzada**. Se sigue un procedimiento validado y se comprueba con inspección visual y, si toca, muestras (frotis o aclarado).", lesson: "limpieza-de-equipos" },

  // ── Seguridad ──────────────────────────────────────────────────────────────
  { id: "s-peligro-atencion", deck: "seguridad", front: "«Peligro» vs «Atención» en una etiqueta", back: "**Peligro** (*Danger*): categorías más graves.\n\n**Atención** (*Warning*): menos graves. Solo aparece una.", lesson: "pictogramas-y-fds" },
  { id: "s-ghs02", deck: "seguridad", front: "Pictograma GHS02 (llama)", back: "**Inflamable**: gases, líquidos o sólidos que arden con facilidad. Ej.: metanol, tolueno.", lesson: "pictogramas-y-fds" },
  { id: "s-ghs05", deck: "seguridad", front: "Pictograma GHS05 (corrosión)", back: "**Corrosivo**: quema la piel, daña gravemente los ojos o ataca los metales. Ej.: sosa, ácido clorhídrico.", lesson: "pictogramas-y-fds" },
  { id: "s-ghs06", deck: "seguridad", front: "Pictograma GHS06 (calavera)", back: "**Toxicidad aguda grave**: puede matar o intoxicar gravemente con una sola exposición.", lesson: "pictogramas-y-fds" },
  { id: "s-ghs08", deck: "seguridad", front: "Pictograma GHS08 (silueta con estrella)", back: "**Peligro grave para la salud**: cáncer, mutágeno, reproducción, sensibilización respiratoria, daño a órganos, aspiración.", lesson: "pictogramas-y-fds" },
  { id: "s-h-p", deck: "seguridad", front: "Frases H y frases P", back: "**H** (*hazard*): qué peligro tiene. H2 físicos, H3 salud, H4 ambiente.\n\n**P** (*precautionary*): qué hacer. P2 prevención, P3 respuesta, P4 almacenamiento, P5 eliminación.", lesson: "pictogramas-y-fds" },
  { id: "s-fds-8", deck: "seguridad", front: "¿Qué sección de la FDS dice qué EPI llevar?", back: "La **sección 8**: controles de exposición y protección individual. La 2 dice los peligros y la 7 cómo manipular y almacenar.", lesson: "pictogramas-y-fds" },
  { id: "s-inflamacion", deck: "seguridad", front: "¿Qué es el punto de inflamación (flash point)?", back: "La temperatura mínima a la que un líquido desprende vapores que **pueden arder** con una chispa. Metanol ≈ 10 °C, tolueno ≈ 4 °C: arden a temperatura ambiente.", lesson: "incendio-y-atex" },
  { id: "s-triangulo", deck: "seguridad", front: "Triángulo del fuego", back: "**Combustible + comburente (oxígeno) + fuente de ignición.** Quitando uno, no hay fuego. Inertizar quita el oxígeno; la toma de tierra quita las chispas.", lesson: "incendio-y-atex" },
  { id: "s-atex", deck: "seguridad", front: "Zonas ATEX 0, 1 y 2 (gases)", back: "**Zona 0**: atmósfera explosiva permanente (dentro del depósito).\n\n**Zona 1**: probable en funcionamiento normal.\n\n**Zona 2**: poco probable y breve.", lesson: "incendio-y-atex" },
  { id: "s-estatica", deck: "seguridad", front: "¿Por qué se pone pinza de tierra al trasvasar disolventes?", back: "Al fluir, el líquido genera **electricidad estática**. La toma de tierra y el enlace equipotencial la descargan antes de que salte una chispa.", lesson: "incendio-y-atex" },
  { id: "s-jerarquia", deck: "seguridad", front: "Jerarquía de control de riesgos", back: "1. Eliminar · 2. Sustituir · 3. Ingeniería · 4. Administrativas · 5. **EPI, la última barrera**.", lesson: "epi" },
  { id: "s-filtros", deck: "seguridad", front: "Colores de los filtros de máscara", back: "**A** marrón: vapores orgánicos · **B** gris: gases inorgánicos · **E** amarillo: gases ácidos · **K** verde: amoniaco · **P** blanco: partículas.", lesson: "epi" },
  { id: "s-n2-asfixia", deck: "seguridad", front: "¿Sirve una máscara con filtro dentro de un equipo con nitrógeno?", back: "**No.** El filtro limpia el aire pero no da oxígeno. Hace falta equipo autónomo o con línea de aire, y permiso de espacio confinado.", lesson: "epi" },
  { id: "s-loto", deck: "seguridad", front: "¿Qué es la consignación (LOTO)?", back: "Aislar todas las energías de un equipo (eléctrica, presión, producto), **bloquearlas con candado y tarjeta** y comprobar energía cero antes de intervenir.", lesson: "permisos-y-consignacion" },
  { id: "s-oeb", deck: "seguridad", front: "¿Qué es una banda OEB?", back: "Banda de exposición laboral (*Occupational Exposure Band*) que se asigna a principios activos e intermedios sin VLA. Cuanto más alta, **más contención** hace falta.", lesson: "exposicion-y-contencion" },

  // ── GMP ────────────────────────────────────────────────────────────────────
  { id: "g-alcoa", deck: "gmp", front: "ALCOA: ¿qué significa cada letra?", back: "**A**tribuible · **L**egible · **C**ontemporáneo · **O**riginal · ex**A**cto (*Accurate*). Las letras salen del inglés: *Attributable, Legible, Contemporaneous, Original, Accurate*.", lesson: "alcoa-plus" },
  { id: "g-alcoa-plus", deck: "gmp", front: "¿Qué añade el «+» de ALCOA+?", back: "**Completo, Consistente, Duradero (perdurable) y Disponible.**", lesson: "alcoa-plus" },
  { id: "g-corregir", deck: "gmp", front: "¿Cómo corriges un error en la hoja de producción?", back: "Una **sola raya** que deje leer lo anterior, el dato correcto al lado, **fecha, firma y motivo**. Nunca tippex, tachones ni arrancar páginas.", lesson: "buenas-practicas-documentacion" },
  { id: "g-contemporaneo", deck: "gmp", front: "¿Se puede apuntar al final del turno lo que hiciste por la mañana?", back: "**No.** Se registra **en el momento** de hacerlo (contemporáneo). Apuntarlo después es un fallo de integridad de datos.", lesson: "alcoa-plus" },
  { id: "g-desviacion", deck: "gmp", front: "¿Qué es una desviación?", back: "Cualquier **salida de lo aprobado** (procedimiento, parámetro, especificación). Se comunica enseguida, se registra, se investiga y se evalúa su impacto en el lote.", lesson: "desviaciones" },
  { id: "g-capa", deck: "gmp", front: "¿Qué es una CAPA?", back: "Acción **Correctiva** (elimina la causa de un problema ocurrido) y **Preventiva** (evita que ocurra uno potencial). Sale de desviaciones, auditorías, reclamaciones…", lesson: "capa-y-control-de-cambios" },
  { id: "g-cambio", deck: "gmp", front: "¿Puedes cambiar un parámetro del proceso «porque va mejor»?", back: "No. Todo cambio pasa por **control de cambios**: se evalúa, se aprueba (QA) y se documenta antes de aplicarlo.", lesson: "capa-y-control-de-cambios" },
  { id: "g-ich-q7", deck: "gmp", front: "¿Qué es la ICH Q7?", back: "La guía de **GMP para principios activos** (API). En la UE es la parte II de las GMP.", lesson: "gmp-e-ich-q7" },
  { id: "g-cuarentena", deck: "gmp", front: "¿Qué significa que un material está en cuarentena?", back: "Está **retenido** hasta que calidad lo analice y lo apruebe. No se puede usar.", lesson: "recepcion-y-cuarentena" },
  { id: "g-liberacion", deck: "gmp", front: "¿Quién decide si un lote de API se libera?", back: "La **unidad de calidad** (QA), independiente de producción, tras revisar la documentación del lote y los análisis.", lesson: "gmp-e-ich-q7" },
  { id: "g-audit-trail", deck: "gmp", front: "¿Qué es el audit trail?", back: "Registro automático e inalterable de **quién, qué, cuándo y por qué** se creó, cambió o borró un dato electrónico.", lesson: "audit-trail-y-firma-electronica" },
  { id: "g-segunda-firma", deck: "gmp", front: "¿Para qué es la segunda firma (verificación) en una pesada?", back: "Otra persona **comprueba** que el material, el lote y la cantidad son los correctos (principio de los cuatro ojos). Firma solo lo que ha visto.", lesson: "buenas-practicas-documentacion" },
  { id: "g-sop", deck: "gmp", front: "¿Qué es un PNT (SOP)?", back: "Procedimiento normalizado de trabajo (*Standard Operating Procedure*): instrucción escrita y aprobada de cómo se hace una tarea. Se sigue al pie de la letra.", lesson: "buenas-practicas-documentacion" },

  // ── Control ────────────────────────────────────────────────────────────────
  { id: "c-sp-pv", deck: "control", front: "SP, PV y OP (o MV) en un lazo", back: "**SP** (*setpoint*): valor deseado.\n\n**PV** (*process value*): valor medido.\n\n**OP/MV**: salida al elemento final (la válvula).", lesson: "lazos-de-control" },
  { id: "c-pid", deck: "control", front: "¿Qué hacen la P, la I y la D de un PID?", back: "**P**: corrige en proporción al error. **I**: elimina el error que queda con el tiempo. **D**: frena según lo rápido que cambia el error.", lesson: "lazos-de-control" },
  { id: "c-tags", deck: "control", front: "Primera letra de un tag: T, P, L, F", back: "**T** temperatura · **P** presión · **L** nivel (*level*) · **F** caudal (*flow*).\n\nTIC = indicador-controlador de temperatura.", lesson: "pid-y-simbologia" },
  { id: "c-alarma-enclav", deck: "control", front: "Alarma vs enclavamiento", back: "**Alarma**: avisa al operador, que debe actuar.\n\n**Enclavamiento** (*interlock*): actúa **solo** (cierra, para) para llevar el equipo a un estado seguro.", lesson: "alarmas-y-enclavamientos" },
  { id: "c-bypass", deck: "control", front: "¿Se puede puentear un enclavamiento para acabar el lote?", back: "**No** sin autorización formal (permiso de anulación) y medidas alternativas. Puentearlo por tu cuenta es una falta grave de seguridad.", lesson: "alarmas-y-enclavamientos" },
  { id: "c-fail-safe", deck: "control", front: "¿Qué es una válvula «falla cerrada» (FC)?", back: "Si se pierde el aire o la señal, **se cierra sola**. Se elige la posición de fallo más segura para el proceso.", lesson: "tuberias-y-valvulas" },
  { id: "c-dcs", deck: "control", front: "¿Qué es un DCS / SCADA?", back: "El sistema de control de la planta: lee los instrumentos, ejecuta los lazos y recetas y muestra las pantallas al operador.", lesson: "dcs-scada-recetas" },

  // ── Laboratorio ────────────────────────────────────────────────────────────
  { id: "l-oos", deck: "lab", front: "¿Qué es un resultado OOS?", back: "*Out of Specification*: resultado **fuera de especificación**. Se investiga antes de repetir nada; no se puede analizar hasta que salga bien.", lesson: "oos-y-oot" },
  { id: "l-ipc", deck: "lab", front: "¿Qué es un control en proceso (IPC)?", back: "Un análisis durante la fabricación (fin de reacción, pH, LOD…) para decidir si se pasa a la siguiente etapa.", lesson: "toma-de-muestras" },
  { id: "l-kf", deck: "lab", front: "¿Qué mide el Karl Fischer y en qué se diferencia del LOD?", back: "**KF**: solo el **agua**.\n\n**LOD**: todo lo que se evapora al secar (agua + disolventes).", lesson: "karl-fischer" },
  { id: "l-hplc", deck: "lab", front: "¿Para qué se usa el HPLC en un API?", back: "Para separar y cuantificar el producto y sus **impurezas**: riqueza (*assay*) y pureza.", lesson: "hplc" },
  { id: "l-gc", deck: "lab", front: "¿Qué se mide típicamente por cromatografía de gases (GC)?", back: "**Disolventes residuales** (ICH Q3C) y sustancias volátiles.", lesson: "cromatografia-de-gases" },
  { id: "l-coa", deck: "lab", front: "¿Qué es el certificado de análisis (CoA)?", back: "Documento con los ensayos, especificaciones y resultados de un lote, firmado por calidad.", lesson: "certificado-de-analisis" },
  { id: "l-muestra", deck: "lab", front: "Tres reglas de la toma de muestras", back: "Muestra **representativa**, **identificada** (material, lote, punto, fecha, quién) y con el **envase y EPI** del procedimiento.", lesson: "toma-de-muestras" },
];

