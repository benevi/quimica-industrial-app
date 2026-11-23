import type { Lesson } from "./types";

export const unidadesAFondo: Lesson = {
  slug: "unidades-a-fondo",
  level: 0,
  order: 4,
  title: "Unidades de medida a fondo: el SI, las conversiones de planta y los errores que cuestan caro",
  titleEn: "Units of measurement in depth: the SI, plant conversions and costly mistakes",
  minutes: 38,
  summary:
    "Qué es una magnitud, una unidad y una medida; las siete unidades básicas del SI y las derivadas de planta; los prefijos; las reglas de escritura del Real Decreto 2032/2009; las unidades admitidas y las que no; doce conversiones paso a paso con factores unitarios; análisis dimensional; y lo que hace el operador para no equivocarse.",
  body: `
En «Unidades y conversiones» viste las equivalencias básicas. Aquí verás el sistema completo: de dónde salen las unidades, cómo manda escribirlas la ley española, cómo se pasa de una a otra sin equivocarse y qué errores son los más peligrosos.

La fuente es el Real Decreto 2032/2009, de unidades legales de medida, en su texto consolidado del BOE («el real decreto»). Su anexo tiene cuatro capítulos: I (unidades básicas), II (derivadas), III (escritura y prefijos) y IV (otras unidades).

### Magnitud, unidad y medida
El Vocabulario Internacional de Metrología (VIM, *International Vocabulary of Metrology*) define estas tres palabras así (traducción propia de la versión inglesa):

- **Magnitud** (*quantity*): propiedad de un fenómeno, un cuerpo o una sustancia que tiene un tamaño que se puede expresar con un número y una referencia. La masa de un saco, la temperatura de un reactor, la presión de una línea.
- **Unidad de medida** (*measurement unit*): una magnitud concreta, definida y adoptada por convenio, con la que se compara cualquier otra magnitud de la misma clase para expresar la relación entre las dos con un número. El kilogramo es «un trozo de masa» acordado por todos.
- **Medición** (*measurement*): el proceso de obtener experimentalmente uno o varios valores que se pueden atribuir razonablemente a una magnitud. Pesar el saco en la báscula es una medición.

El resultado es el **valor de la magnitud** (*quantity value*). El real decreto (capítulo III, apartado 2.1) lo define como el producto de un número por una unidad. El número solo no es el valor.

Piensa en una receta que dice «añade 2 de sal»: ¿gramos, cucharadas o kilos? Si en una casilla de la hoja de producción (*batch record*) alguien escribe «Presión: 500», puede ser 500 mbar abs (la mitad de la atmosférica, un vacío moderado) o 500 kPa (5 bar, una presión que muchos equipos no aguantan). Un número sin unidad no significa nada.

### El Sistema Internacional
El artículo único del real decreto dice que el sistema legal de unidades obligatorio en España es el Sistema Internacional de Unidades (SI, *International System of Units*), adoptado por la Conferencia General de Pesas y Medidas (CGPM). Tiene siete unidades básicas (capítulo I, tabla 1):

| Magnitud | Unidad | Símbolo |
|---|---|---|
| Longitud | metro | m |
| Masa | kilogramo | kg |
| Tiempo | segundo | s |
| Corriente eléctrica | amperio | A |
| Temperatura termodinámica | kelvin | K |
| Cantidad de sustancia | mol | mol |
| Intensidad luminosa | candela | cd |

**Cómo se definen hoy.** Cada unidad básica se define fijando el valor exacto de una constante de la naturaleza, que no cambia nunca. Según el preámbulo del Real Decreto 493/2020, que modificó el capítulo I, la revisión la adoptó la CGPM en noviembre de 2018 y es la más importante desde que el SI tomó ese nombre en 1960. El capítulo I, apartado 2, dice por ejemplo:

- **El segundo** se fija con la frecuencia de una vibración del átomo de cesio 133: 9 192 631 770 por segundo.
- **El metro** se fija con la velocidad de la luz en el vacío: 299 792 458 m/s.
- **El kilogramo** se fija con la constante de Planck: 6,626 070 15 × 10⁻³⁴ J·s.
- **El kelvin** se fija con la constante de Boltzmann: 1,380 649 × 10⁻²³ J/K.
- **El mol** contiene exactamente 6,022 140 76 × 10²³ entidades elementales (átomos, moléculas, iones…). Es la unidad con la que los químicos cuentan partículas; se explica desde cero en «El mol: contar moléculas pesando».

En planta no cambia nada: un kilo sigue siendo un kilo.

### Unidades derivadas que verás en planta
Las demás unidades se forman multiplicando y dividiendo las básicas (capítulo II). Algunas tienen nombre propio (tabla 3):

| Unidad | Símbolo | Magnitud | En unidades básicas |
|---|---|---|---|
| newton | N | fuerza | m·kg·s⁻² |
| pascal | Pa | presión | N/m² = m⁻¹·kg·s⁻² |
| julio | J | energía, trabajo, calor | N·m = m²·kg·s⁻² |
| vatio | W | potencia | J/s = m²·kg·s⁻³ |
| grado Celsius | °C | temperatura Celsius | K |

Con palabras: un newton acelera 1 kg a 1 m/s cada segundo. Un pascal es un newton repartido en un metro cuadrado (muy poco: por eso se usan el kPa y el bar). Un julio es empujar con un newton a lo largo de un metro. Un vatio es un julio cada segundo.

La nota (e) de la tabla 3 dice que la temperatura Celsius es la temperatura en kelvin menos 273,15 K, y que un grado Celsius es, en tamaño, igual a un kelvin. Por eso una diferencia de temperaturas vale lo mismo en °C que en K.

### Los prefijos
Un prefijo multiplica la unidad por una potencia de diez (capítulo III, tabla 5):

| Prefijo | Símbolo | Factor | Ejemplo |
|---|---|---|---|
| giga | G | 10⁹ (mil millones) | GJ en consumos de energía anuales |
| mega | M | 10⁶ (un millón) | MPa, MW |
| kilo | k | 10³ (mil) | kg, kPa, kW |
| centi | c | 10⁻² (una centésima) | cm |
| mili | m | 10⁻³ (una milésima) | mL, mbar, mg |
| micro | µ | 10⁻⁶ (una millonésima) | µm (filtros), µg |
| nano | n | 10⁻⁹ (una milmillonésima) | nm |

Reglas del capítulo III:

- **Mayúsculas y minúsculas importan.** Salvo da, h y k, los prefijos de múltiplos van en mayúscula y los de submúltiplos en minúscula (apartado 3.2). La m minúscula es mili (una milésima); la M mayúscula es mega (un millón). Entre 1 mbar y 1 Mbar hay un factor de mil millones. Y «Kg» está mal: la K mayúscula es el símbolo del kelvin.
- **Nunca dos prefijos juntos** (apartados 1.2 y 3.4): se escribe nm, no mµm.
- **Nunca un prefijo solo**: «5 k» no es nada.
- **El kilogramo es la excepción**: ya lleva prefijo, así que los múltiplos se forman sobre el gramo (apartado 3.6): mg, g, kg. No existe «µkg».
- **Los prefijos no se usan con minuto, hora ni día** (apartado 3.5).
- Un prefijo pegado a su unidad forma una unidad nueva que se eleva entera (apartado 3.3): 1 cm³ = (0,01 m)³ = 0,000 001 m³, no 0,01 m³.

### Cómo se escriben símbolos y números
Estas reglas del capítulo III sirven para que nadie lea mal un dato.

1. **Sin punto, sin plural** (apartado 1.3). Los símbolos no son abreviaturas: 5 kg, no «5 kg.» ni «5 kgs».
2. **Sin abreviaturas inventadas** (apartado 1.5). El real decreto pone como ejemplos prohibidos «seg» por s y «cc» por cm³. En una hoja escribe 15 s, 250 mL o 250 cm³.
3. **Espacio entre número y unidad** (apartado 2.6): 5 kg, no 5kg. Las únicas excepciones son el grado, el minuto y el segundo de ángulo: un codo de 90°. El grado Celsius sí lleva espacio: 25 °C, no 25°C.
4. **Una sola unidad por expresión** (apartado 2.7): 1,25 m, no «1 m 25 cm». Se admite mezclar en tiempo: 2 h 30 min.
5. **Coma decimal y cero delante** (apartado 2.8): se prefiere la coma, y si el número está entre −1 y 1 lleva cero delante: 0,5 bar, nunca ,5 bar.
6. **Grupos de tres cifras con espacio** (apartado 2.9): 12 500 kg. Nunca con punto ni coma. Con cuatro cifras lo usual es no separar: 1500 kg.
7. **Una sola barra** (apartado 1.4): J/(kg·K), no J/kg/K.
8. **El % lleva espacio** y hay que decir de qué es (apartado 2.10): 0,5 % en masa.
9. **La unidad no se adorna** (apartado 2.5): la información sobre la magnitud va con la magnitud, no pegada al símbolo. En sentido estricto se escribiría «presión manométrica: 2 bar». En planta verás «bar g» y «mbar abs», como en el resto de este curso; lo importante es que quede claro cuál es, y que uses la forma que pida tu hoja.

Errores frecuentes en hojas, y cómo deberían ir:

| Escrito | Problema | Correcto |
|---|---|---|
| 5Kg | Falta espacio; K es kelvin | 5 kg |
| 25 kgs | Plural | 25 kg |
| 1.500 kg | El punto puede leerse como decimal: 1,5 kg | 1500 kg |
| 12,500 kg | La coma es decimal: 12,5 kg | 12 500 kg |
| ,8 bar | Falta el cero | 0,8 bar |
| 250 cc | Abreviatura no admitida | 250 mL |
| 65º C | Símbolo de ángulo y espacio mal puesto | 65 °C |

Del litro, el real decreto admite L y l, y recomienda la L mayúscula para no confundir la ele con el uno (capítulo IV, nota d de la tabla 6).

### Unidades fuera del SI: cuáles son legales
El capítulo IV autoriza algunas unidades que no son del SI:

- **Tabla 6, aceptadas con el SI:** minuto (1 min = 60 s), hora (1 h = 3600 s), día (1 d = 86 400 s), litro (1 L = 1 dm³ = 0,001 m³), tonelada (1 t = 1000 kg), hectárea y el grado de ángulo.
- **Tabla 8, para sectores concretos:** el **bar** (1 bar = 100 kPa = 0,1 MPa), que se puede usar con prefijos (mbar); y el **milímetro de mercurio** (1 mmHg ≈ 133,322 Pa), que según la nota (b) se usa únicamente para la presión sanguínea y de otros fluidos corporales.

La **atmósfera** solo aparece en una nota histórica: antes de 1982 la presión normal era la atmósfera normal, igual a 1,013 25 bar o 101 325 Pa. La **caloría** no aparece. Ni la atmósfera, ni la caloría, ni el mmHg fuera de la medicina están entre las unidades autorizadas: no son unidades legales para medir en planta. Además, la disposición adicional única dice que los instrumentos de medida deben dar sus indicaciones en una sola unidad legal.

Aun así salen en manuales antiguos o importados. Para entenderlos:

- **Caloría.** Un real decreto alimentario antiguo (Real Decreto 2685/1976) dice que un kilojulio equivale a 0,239 kilocalorías. O sea, 1 kcal ≈ 4,18 kJ.
- **Unidades anglosajonas.** La tabla de conversión del reglamento estadounidense de transporte de mercancías peligrosas (49 CFR 171.10) da: 1 pulgada (in) = 25,4 mm; 1 libra (lb) = 0,4535924 kg; 1 galón estadounidense (gal) = 3,785412 L; 1 psi (libra por pulgada cuadrada) = 6,894757 kPa; 1 bar = 14,504 psi. El galón sale de su definición, 231 pulgadas cúbicas: 231 × 2,54³ = 3785,41 cm³.
- **Grado Fahrenheit (°F).** Es de libro de texto: t(°F) = 1,8 × t(°C) + 32, y al revés t(°C) = (t(°F) − 32) / 1,8. Comprobación: −40 °C son −40 °F, y una diferencia de 3 °C son 5,4 °F, como aparece en otra norma del mismo reglamento (49 CFR 571.116).

Sirven para entender un manual; en la hoja se anota lo que marca el instrumento.

### El método del factor unitario
Un **factor de conversión** (*conversion factor*) es, según el VIM, el cociente de dos unidades de la misma clase: km/m = 1000, así que 1 km = 1000 m.

El truco: si 1 m³ = 1000 L, la fracción (1000 L / 1 m³) vale exactamente 1. Multiplicar por 1 no cambia la cantidad, solo la unidad. Se elige la fracción que deja arriba la unidad que quieres y abajo la que quieres tachar. Las unidades se tachan como números: el real decreto dice que los símbolos son entidades matemáticas (capítulo III, apartado 2.4).

### Doce conversiones de planta

**1. Toneladas a kilos.** Llega un camión con 1,25 t de sal. 1,25 t × (1000 kg / 1 t) = **1250 kg**.

**2. Gramos a kilos.** Una muestra pesa 380 g. 380 g × (1 kg / 1000 g) = **0,38 kg**. Con el cero delante.

**3. Volumen.** Un depósito de 3,2 m³: 3,2 m³ × (1000 L / 1 m³) = **3200 L**. Un frasco de 450 mL: 450 mL × (1 L / 1000 mL) = **0,45 L**.

**4. Caudal de L/min a m³/h.** Una bomba da 150 L/min. Hay que cambiar dos unidades a la vez:
150 L/min × (60 min / 1 h) × (1 m³ / 1000 L) = **9 m³/h**. Se tachan min y L.

**5. De caudal en volumen a caudal en masa.** Esos 9 m³/h son de metanol, con densidad 0,79 kg/L (la de la ficha de seguridad de esta aplicación). 9 m³/h × (1000 L / 1 m³) × (0,79 kg / 1 L) = **7110 kg/h**. La densidad es el factor que une litros y kilos.

**6. Presión entre bar, kPa y mbar.** El manómetro marca 2,5 bar: 2,5 bar × (100 kPa / 1 bar) = **250 kPa**. Un vacuómetro marca 35 mbar: 35 mbar × (1 bar / 1000 mbar) × (100 kPa / 1 bar) = **3,5 kPa**.

**7. Psi a bar.** El manual de una bomba importada dice «presión máxima 150 psi». 150 psi × (6,894757 kPa / 1 psi) × (1 bar / 100 kPa) = **10,3 bar**.

**8. mmHg a mbar.** Un vacuómetro antiguo marca 50 mmHg. 50 mmHg × (133,322 Pa / 1 mmHg) × (1 mbar / 100 Pa) = **66,7 mbar**.

**9. Temperaturas.** La masa está a 65 °C; en kelvin: 65 + 273,15 = **338,15 K**. Un manual dice «no superar 350 °F»: (350 − 32) / 1,8 = **176,7 °C**. Aquí no basta una fracción: las escalas no empiezan en el mismo cero.

**10. Una diferencia de temperatura no es una temperatura.** El manual dice «subir como máximo 36 °F por hora». Es una diferencia, no una lectura. El 32 solo mueve el cero de la escala, y en una diferencia los ceros se anulan: 36 / 1,8 = **20 °C por hora**, que son también 20 K por hora. Si aplicas por error la fórmula entera, (36 − 32) / 1,8 = 2,2 °C, te sale un límite unas nueve veces más pequeño que el real.

**11. Energía y potencia.** Una resistencia de 2,5 kW funciona 3 h. Energía: 2,5 kW × 3 h = **7,5 kWh**. En kilojulios, con 1 kW = 1 kJ/s y 1 h = 3600 s: 7,5 kWh × (3600 kJ / 1 kWh) = **27 000 kJ**. Un enfriador antiguo dice «50 000 kcal/h». 50 000 kcal/h × (1 kJ / 0,239 kcal) × (1 h / 3600 s) = 58,1 kJ/s = **58,1 kW**.

**12. Concentraciones.** Una disolución de 25 g/L: 25 g/L × (1000 mg / 1 g) × (1 L / 1000 mL) = **25 mg/mL**. Los dos mil se anulan. Un análisis encuentra 2,4 g de disolvente en 8 kg de producto: 2400 mg / 8 kg = 300 mg/kg = **300 ppm en masa**, porque un miligramo es la millonésima parte de un kilo. Y un 0,05 % son 0,0005 = **500 ppm**. El real decreto (capítulo III, 2.10) define ppm como 10⁻⁶ y pide decir siempre de qué magnitud se trata: no es lo mismo ppm en masa que ppm en volumen.

### Análisis dimensional: la fórmula se comprueba sola
Pon cada dato con su unidad y tacha: lo que queda tiene que ser la unidad buscada. Si no, hay un dato mal metido.

**Calor: Q = m × cp × ΔT.** Calentar 600 kg de agua (cp = 4,18 kJ/(kg·K): es el calor específico, la energía para subir un grado un kilo de agua, el mismo valor de «Las cuentas de planta a fondo») 15 K: kg × kJ/(kg·K) × K. Se tachan kg y K, queda kJ. Q = 600 × 4,18 × 15 = **37 620 kJ**. Con la masa en gramos, la unidad no se tacharía.

**Presión de una columna de líquido: P = ρ × g × h.** Metanol (790 kg/m³), g = 9,81 m/s², altura 2,0 m. Unidades: kg/m³ × m/s² × m = kg/(m·s²). Es justo la expresión del pascal en la tabla 3 (m⁻¹·kg·s⁻²). P = 790 × 9,81 × 2,0 = 15 500 Pa, unos **155 mbar**.

**Caudal: Q = v × A.** Velocidad 1,5 m/s por un tubo de 0,002 m² de sección (valor de ejemplo). m/s × m² = m³/s. Q = 1,5 × 0,002 = 0,003 m³/s; × 3600 s/h = **10,8 m³/h**.

### Errores de unidades que cuestan caro
Casos ficticios, inventados para esta lección.

- **Kilos por litros.** La hoja pide 500 kg de metanol y se cargan 500 L por el caudalímetro. 500 L × 0,79 kg/L = 395 kg: faltan 105 kg, un 21 %. El lote sale con una proporción equivocada.
- **mbar por bar.** La hoja pide «≤ 100 mbar abs» y el panel trabaja en bar. Teclear 100 en la casilla en bar es pedir mil veces más.
- **Absoluta por manométrica.** Con 1 bar de atmósfera redondeado, −0,9 bar g son unos 100 mbar abs. Si se lee «100 mbar» como 100 mbar por debajo del ambiente, el equipo queda a unos 900 mbar abs: casi sin vacío.
- **mg por µg.** 0,5 mg son 500 µg. Confundir µ con m multiplica o divide por mil.

### Lo que hace el operador
1. **Anota la unidad que marca el instrumento**, con el número tal cual. Si el manómetro marca 87 psi, el registro no es «6 bar».
2. **No convierte de cabeza en un registro.** Según ALCOA+, el dato debe ser original y exacto. Una conversión mental es un dato nuevo, sin rastro de cómo se obtuvo.
3. **Comprueba la unidad de la consigna** antes de teclear: bar o mbar, °C o K, L/min o m³/h, y si la presión es absoluta o manométrica.
4. **Avisa si la hoja y el instrumento usan unidades distintas.** Se corrige por el cauce establecido, no se improvisa en el turno.
5. **Escribe bien**: espacio, sin punto, sin plural, coma decimal, cero delante, k minúscula.

Los ejemplos y valores de esta lección sirven para entender. En planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Turno de noche. Llega a la sala de centrífugas la nueva centrífuga CF-230, comprada a un fabricante extranjero. Su manual dice: *«Nitrogen supply: 87 psi max. Bearing temperature alarm: 120 °F.»* El manómetro local de nitrógeno de la máquina tiene la esfera en psi. La hoja de producción del intermedio ficticio TX-88, en cambio, pide «presión de nitrógeno de sellado 5,5 – 6,0 bar g» y «temperatura de rodamientos ≤ 50 °C».

Te paras antes de arrancar. Haces la cuenta en un papel aparte solo para entender: 87 psi × 6,894757 kPa/psi = 599,8 kPa, unos 6,0 bar. El máximo del fabricante coincide con el máximo de la hoja. 120 °F son (120 − 32) / 1,8 = 48,9 °C: la alarma de la máquina salta antes que el límite de la hoja.

Pero en la casilla de la hoja pone «bar g» y tu instrumento marca psi. No escribes «6 bar» inventado a partir de una lectura en psi. Llamas a la jefa de turno. Ella confirma que la incidencia está abierta y que, hasta que se cambie el manómetro, el procedimiento manda leer el transmisor PT-230 del panel, que sí da bar g y está calibrado.

Lees en el panel 5,8 bar g y lo anotas tal cual, con la hora. En observaciones dejas escrito que el manómetro local de la CF-230 está en psi y que la lectura registrada es la del PT-230, como indica la jefa de turno.
`,
  batchRecord: `
En la hoja de producción (*batch record*) las unidades aparecen en tres sitios: en la instrucción («cargar 1250 kg», «vacío ≤ 100 mbar abs»), en el encabezado de la casilla y en la escala del instrumento. Las tres deben coincidir. Lo que anotas:

- **Valor y unidad**, tal como los da el instrumento: 1250 kg, 5,8 bar g, 65 °C, 9,0 m³/h.
- **Código del instrumento** cuando la hoja lo pide (báscula, transmisor, caudalímetro), con su calibración vigente.
- **Bien escrito**: espacio entre número y unidad, coma decimal, cero delante (0,38 kg), sin punto ni plural, k minúscula en kg, 12 500 kg con espacio y no con punto.
- **Si la presión es absoluta o manométrica**, con la forma que use tu hoja (mbar abs, bar g).
- **Nunca valores convertidos de cabeza.** Si una conversión hace falta, la hace el procedimiento o el sistema, no el operador en la casilla.
- **Discrepancias de unidades** entre hoja, instrumento y consigna: en observaciones, con aviso al responsable de turno.
- **Correcciones**: una raya sobre el dato erróneo, que siga legible, con el dato bueno, fecha, firma y motivo, según el procedimiento.
`,
  terms: [
    { es: "Magnitud", en: "Quantity", def: "Propiedad de un fenómeno, cuerpo o sustancia cuyo tamaño se expresa con un número y una referencia: masa, temperatura, presión." },
    { es: "Unidad de medida", en: "Measurement unit", def: "Magnitud concreta, definida y adoptada por convenio, con la que se comparan las demás de su clase. Por ejemplo, el kilogramo." },
    { es: "Valor de una magnitud", en: "Quantity value", def: "Número y unidad juntos, como 1250 kg. El número solo no es el valor." },
    { es: "Medición", en: "Measurement", def: "Proceso de obtener experimentalmente uno o varios valores que se pueden atribuir razonablemente a una magnitud." },
    { es: "Sistema Internacional de Unidades", en: "International System of Units (SI)", def: "Sistema de unidades adoptado por la CGPM; es el sistema legal obligatorio en España según el Real Decreto 2032/2009." },
    { es: "Unidad básica", en: "Base unit", def: "Cada una de las siete unidades del SI de las que salen todas las demás: metro, kilogramo, segundo, amperio, kelvin, mol y candela." },
    { es: "Unidad derivada", en: "Derived unit", def: "Unidad formada multiplicando y dividiendo unidades básicas, como el pascal o el vatio." },
    { es: "Prefijo", en: "SI prefix", def: "Partícula que multiplica una unidad por una potencia de diez: k (mil), m (una milésima), µ (una millonésima)." },
    { es: "Unidad fuera del SI", en: "Off-system unit", def: "Unidad que no pertenece al SI. Algunas están autorizadas, como el litro, la tonelada, la hora o el bar; otras no, como la caloría o el psi." },
    { es: "Factor de conversión", en: "Conversion factor", def: "Cociente entre dos unidades de la misma clase, como 1000 L / 1 m³; vale 1 y solo cambia la unidad." },
    { es: "Análisis dimensional", en: "Dimensional analysis", def: "Comprobar una fórmula poniendo cada dato con su unidad y tachando: lo que queda debe ser la unidad buscada." },
    { es: "Separador decimal", en: "Decimal separator", def: "Signo entre la parte entera y la decimal. El real decreto prefiere la coma y pide un cero delante si el número está entre −1 y 1." },
    { es: "Partes por millón", en: "Parts per million (ppm)", def: "Fracción igual a 10⁻⁶; hay que decir de qué magnitud es: 1 mg/kg es 1 ppm en masa." },
    { es: "Consigna", en: "Setpoint", def: "Valor que se pide al sistema de control para una variable; hay que comprobar su unidad antes de introducirla." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Una bomba de carga da 200 L/min. ¿Cuántos m³/h son? (1 h = 60 min; 1 m³ = 1000 L)",
      answer: 12,
      tolerance: 0.01,
      unit: "m³/h",
      explain: "200 L/min × (60 min / 1 h) × (1 m³ / 1000 L) = 12 m³/h.",
    },
    {
      kind: "number",
      q: "Se cargan 120 L/min de metanol, de densidad 0,79 kg/L. ¿Cuántos kg/h son?",
      answer: 5688,
      tolerance: 0.01,
      unit: "kg/h",
      explain: "120 L/min × (60 min / 1 h) × (0,79 kg / 1 L) = 5688 kg/h. La densidad es el factor que une litros y kilos.",
    },
    {
      kind: "number",
      q: "Un vacuómetro marca 45 mbar. ¿Cuántos kPa son? (1 bar = 1000 mbar = 100 kPa)",
      answer: 4.5,
      tolerance: 0.01,
      unit: "kPa",
      explain: "45 mbar × (1 bar / 1000 mbar) × (100 kPa / 1 bar) = 4,5 kPa. Cada 10 mbar son 1 kPa.",
    },
    {
      kind: "number",
      q: "El manual de un filtro importado dice «presión máxima 100 psi». Con 1 psi = 6,894757 kPa y 1 bar = 100 kPa, ¿cuántos bar son?",
      answer: 6.89,
      tolerance: 0.01,
      unit: "bar",
      explain: "100 psi × (6,894757 kPa / 1 psi) × (1 bar / 100 kPa) = 6,894757 bar, unos 6,89 bar. Es solo para entender el manual: se anota lo que marca el instrumento.",
    },
    {
      kind: "number",
      q: "Un manual dice «temperatura máxima de la camisa 302 °F». Con t(°C) = (t(°F) − 32) / 1,8, ¿cuántos °C son?",
      answer: 150,
      tolerance: 0.01,
      unit: "°C",
      explain: "(302 − 32) / 1,8 = 270 / 1,8 = 150 °C.",
    },
    {
      kind: "number",
      q: "El manual de un secadero dice «no calentar más de 27 °F por hora». Es una diferencia de temperatura, en la que el 32 no cuenta. ¿Cuántos kelvin por hora son?",
      answer: 15,
      tolerance: 0.01,
      unit: "K/h",
      explain: "En una diferencia solo cuenta el tamaño del grado: 27 / 1,8 = 15 K por hora, que son también 15 °C por hora. Restar 32 daría un límite falso.",
    },
    {
      kind: "number",
      q: "Una resistencia de 4 kW funciona 2,5 h. ¿Cuánta energía consume en kJ? (1 kW = 1 kJ/s; 1 h = 3600 s)",
      answer: 36000,
      tolerance: 0.01,
      unit: "kJ",
      explain: "4 kW × 2,5 h = 10 kWh. 10 kWh × (3600 kJ / 1 kWh) = 36000 kJ.",
    },
    {
      kind: "number",
      q: "El análisis encuentra 0,6 g de disolvente en 4 kg de producto. ¿Cuántas ppm en masa son? (1 g = 1000 mg; 1 mg/kg = 1 ppm en masa)",
      answer: 150,
      tolerance: 0.01,
      unit: "ppm",
      explain: "0,6 g = 600 mg. 600 mg / 4 kg = 150 mg/kg = 150 ppm en masa.",
    },
    {
      kind: "choice",
      q: "Has pesado mil quinientos kilos de sal en la báscula. ¿Cuál es la forma correcta de anotarlo en la hoja?",
      options: [
        "1.500 Kg, con punto de miles y la K en mayúscula",
        "1500kgs, todo junto y con la ese del plural",
        "1500 kg, con espacio y k minúscula, sin punto",
        "1,500 kg., con coma de miles y punto final",
      ],
      answer: 2,
      explain: "Según el Real Decreto 2032/2009: espacio entre número y unidad, sin punto ni plural, k minúscula (K es kelvin) y sin puntos ni comas entre grupos de cifras; con cuatro cifras lo usual es no separar.",
    },
    {
      kind: "choice",
      q: "La hoja pide «presión de nitrógeno 5,5 – 6,0 bar g» y el manómetro local del equipo tiene la esfera en psi. ¿Qué haces?",
      options: [
        "Convierto de cabeza a bar y anoto el resultado en la casilla",
        "Aviso al responsable y sigo lo que diga el procedimiento",
        "Anoto el número en psi en la casilla de bar sin decir nada",
        "Dejo la casilla en blanco y sigo con el lote como si nada",
      ],
      answer: 1,
      explain: "Hoja e instrumento usan unidades distintas: se avisa y se sigue el procedimiento. Una conversión mental no es un dato original, y un número en psi en una casilla de bar es un error.",
    },
  ],
};
