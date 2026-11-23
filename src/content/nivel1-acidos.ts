import type { Lesson } from "./types";

export const acidosBasesAFondo: Lesson = {
  slug: "acidos-bases-a-fondo",
  level: 1,
  order: 12,
  title: "Ácidos, bases y pH a fondo: medir, ajustar y neutralizar sin riesgos",
  titleEn: "Acids, bases and pH in depth: measuring, adjusting and neutralizing safely",
  minutes: 38,
  summary:
    "Qué es de verdad un ácido y una base, por qué el pH es un logaritmo y cómo se calcula, ácidos fuertes y débiles, cuánta sosa hace falta para neutralizar, cómo el pH mueve un producto entre capas o lo hace precipitar, los tampones, cómo se mide bien el pH y qué mezclas no se hacen nunca.",
  body: `
En «Ácidos, bases y pH» viste la escala de 0 a 14 y que la neutralización da sal y agua. Aquí vas a entender de dónde salen esos números, a hacer las cuentas de planta y a saber por qué está cada precaución de la hoja.

### Primero, qué es un protón
El átomo de hidrógeno es el más pequeño: una partícula positiva, el **protón** (*proton*), y un electrón alrededor. Si le quitas el electrón solo queda el protón; por eso al ion H⁺ se le llama «un protón».

En el agua un H⁺ no va suelto: se pega enseguida a una molécula de agua y forma el **ion hidronio** (*hydronium ion*), H₃O⁺. Aquí usamos H⁺ y H₃O⁺ como sinónimos.

### Ácido y base según Brønsted-Lowry
La definición de **Brønsted-Lowry** es muy sencilla:

- Un **ácido** (*acid*) es una sustancia que **da** un protón.
- Una **base** (*base*) es una sustancia que **acepta** un protón.

Piensa en un balón que se pasan dos jugadores: el ácido lo lanza y la base lo recoge. Nadie suelta el protón al vacío; siempre hay quien lo recibe, y muchas veces es la propia agua:

- **Ácido clorhídrico en agua**: HCl + H₂O da H₃O⁺ + Cl⁻. El HCl da su protón; el agua lo acepta y hace de base. Queda el ion cloruro, Cl⁻.
- **Amoníaco en agua**: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. Aquí el agua da un protón y hace de ácido; el amoníaco lo acepta y hace de base. Quedan el ion amonio, NH₄⁺, y el ion **hidróxido** (*hydroxide*), OH⁻. El símbolo ⇌ (doble flecha) significa que la reacción va en los dos sentidos a la vez, como verás en «Equilibrio químico».

El agua puede dar y aceptar protones. Lo que queda de un ácido tras soltar el protón es su **base conjugada** (*conjugate base*): el Cl⁻ del HCl, el acetato del ácido acético. Es la misma pieza sin el balón.

### Los ácidos y bases que verás en planta
| Sustancia | Fórmula | Qué es | Dónde aparece |
|---|---|---|---|
| Ácido clorhídrico | HCl | Ácido fuerte | Ajuste de pH, formación de clorhidratos, lavados ácidos |
| Ácido sulfúrico | H₂SO₄ | Ácido fuerte, con dos protones | Ajustes de pH, catalizador, lavados |
| Ácido acético | CH₃COOH | Ácido débil | Ajustes suaves, disolvente, tampones |
| Hidróxido de sodio (sosa) | NaOH | Base fuerte | Neutralizaciones, lavados básicos, limpieza |
| Hidróxido de potasio (potasa) | KOH | Base fuerte | Igual que la sosa |
| Amoníaco | NH₃ | Base débil | Ajustes de pH, reactivo |
| Carbonato de sodio | Na₂CO₃ | Base débil | Lavados básicos suaves |
| Bicarbonato de sodio | NaHCO₃ | Base débil | Lavados suaves, neutralizar derrames de ácido |
| Aminas (trietilamina y otras) | R–NH₂ y similares | Bases débiles | Reactivos y muchos principios activos |

La sosa y la potasa llevan el OH⁻ ya hecho, que acepta protones: OH⁻ + H⁺ da H₂O. El carbonato y el bicarbonato, con un ácido, acaban soltando dióxido de carbono (CO₂) y hacen espuma. Las aminas son primas orgánicas del amoníaco: un nitrógeno que acepta un protón.

### El agua se rompe, pero muy poco
Hasta el agua más pura tiene algún H₃O⁺ y algún OH⁻, porque de vez en cuando una molécula de agua le pasa un protón a otra:

> H₂O + H₂O ⇌ H₃O⁺ + OH⁻

Es rarísimo. Si multiplicas la concentración de H⁺ por la de OH⁻ (en mol/L, como en «Disoluciones y concentración»), a 25 °C sale siempre el mismo número, el **producto iónico del agua** (*ion product of water*), Kw:

> Kw = [H⁺] × [OH⁻] = 1,0 × 10⁻¹⁴ a 25 °C

Los corchetes significan «concentración en mol/L». En agua pura hay tantos H⁺ como OH⁻: 1,0 × 10⁻⁷ mol/L cada uno, porque 10⁻⁷ × 10⁻⁷ = 10⁻¹⁴. Funciona como un balancín: si sube el H⁺, baja el OH⁻.

| Situación | Qué pasa | A 25 °C |
|---|---|---|
| Neutra | [H⁺] = [OH⁻] | [H⁺] = 10⁻⁷ mol/L |
| Ácida | [H⁺] mayor que [OH⁻] | [H⁺] mayor que 10⁻⁷ mol/L |
| Básica | [H⁺] menor que [OH⁻] | [H⁺] menor que 10⁻⁷ mol/L |

Kw cambia con la temperatura: en caliente el agua se rompe algo más y el agua neutra ya no da exactamente pH 7. Por eso aquí todo es a 25 °C.

### Qué es un logaritmo, sin miedo
Las concentraciones de H⁺ van de 1 mol/L a 0,00000000000001 mol/L. Para no escribir tantos ceros se cuentan. Primero, las **potencias de diez**: 10² = 100, 10³ = 1000, y con signo menos se divide: 10⁻¹ = 0,1; 10⁻³ = 0,001. El número de arriba dice cuántos lugares se mueve la coma.

El **logaritmo en base 10** (*base-10 logarithm*), log, hace el camino inverso: te dice a qué potencia hay que elevar 10 para obtener un número.

| Número | Escrito como potencia | log |
|---|---|---|
| 1000 | 10³ | 3 |
| 10 | 10¹ | 1 |
| 1 | 10⁰ | 0 |
| 0,1 | 10⁻¹ | −1 |
| 0,001 | 10⁻³ | −3 |
| 0,0000001 | 10⁻⁷ | −7 |

Es preguntar «¿cuántos ceros tiene?». Para números como 0,005 se usa la tecla «log» de la calculadora (log 0,005 = −2,30); para volver, la tecla «10ˣ».

### El pH, por fin
El **pH** es el logaritmo de la concentración de H⁺ cambiado de signo:

> pH = −log[H⁺]

El signo menos solo hace que salga positivo: con [H⁺] = 10⁻⁷, el pH es 7. Igual para el OH⁻: **pOH** = −log[OH⁻]. Como el producto de las dos es 10⁻¹⁴, a 25 °C:

> pH + pOH = 14

Como el pH cuenta potencias de diez, **una unidad de pH es multiplicar o dividir por 10** el H⁺. De pH 4 a pH 3 no es «un poco más ácido»: es diez veces más H⁺. Por eso la hoja da rangos tan estrechos.

### Seis cuentas resueltas
En los ácidos y bases fuertes cada molécula suelta su protón o su OH⁻, así que la concentración de H⁺ u OH⁻ es la del producto.

1. **HCl 0,1 mol/L.** [H⁺] = 0,1 = 10⁻¹. pH = 1.
2. **HCl 0,001 mol/L.** [H⁺] = 10⁻³. pH = 3. Cien veces menos ácido que el anterior, dos unidades de pH más.
3. **NaOH 0,01 mol/L.** [OH⁻] = 10⁻². pOH = 2. pH = 14 − 2 = 12.
4. **[H⁺] a partir del pH.** Una muestra da pH 4,5. [H⁺] = 10⁻⁴·⁵ = 0,0000316 mol/L, es decir, 3,16 × 10⁻⁵ mol/L (tecla 10ˣ con −4,5).
5. **Cuántas veces más ácida.** pH 2 frente a pH 5: tres unidades de diferencia, 10 × 10 × 10 = 1000 veces más H⁺.
6. **Diluir 10 veces un ácido fuerte.** HCl 0,01 mol/L (pH 2). Tomas 1 L y completas con agua hasta 10 L: la concentración baja a 0,001 mol/L y el pH sube a 3. Diluir 10 veces sube una unidad de pH.

Aviso: diluyendo un ácido te acercas a 7, pero nunca lo cruzas; el agua no vuelve básico un ácido. La cuenta simple solo vale mientras el ácido aporta muchos más H⁺ que el agua.

### Fuertes y débiles: soltar el protón del todo o solo en parte
Un **ácido fuerte** (*strong acid*), como el HCl, suelta en agua prácticamente todos sus protones. Un **ácido débil** (*weak acid*), como el acético, solo suelta una pequeña parte; el resto se queda entero, en equilibrio. Con las bases igual: la sosa da todos sus OH⁻; el amoníaco y las aminas solo captan protones en parte.

Fuerte no es lo mismo que concentrado: «fuerte» habla de cómo se comporta cada molécula; «concentrado», de cuántas hay en cada litro.

Lo fácil que un ácido suelta su protón se mide con su **constante de acidez** (*acid dissociation constant*), Ka: cuanto mayor, más fácil. Como tiene muchos ceros se usa el **pKa** = −log Ka, y la regla se invierte como con el pH: **pKa bajo, ácido más fuerte; pKa alto, más débil**. Para el ácido acético el valor de libro de texto es pKa ≈ 4,76, así que Ka = 10⁻⁴·⁷⁶ ≈ 1,74 × 10⁻⁵.

¿Qué pH tiene el ácido acético 0,1 mol/L? Si fuera fuerte, pH 1. Para un ácido débil hay una aproximación de libro de texto:

> [H⁺] ≈ raíz cuadrada de (Ka × concentración)

[H⁺] ≈ raíz de (1,74 × 10⁻⁵ × 0,1) = 1,32 × 10⁻³ mol/L. pH ≈ 2,88.

A la misma concentración, el acético da casi dos unidades de pH más que el clorhídrico, porque solo un 1,3 % de sus moléculas ha soltado el protón.

### Neutralización: contar moles
Al juntar un ácido y una base, el H⁺ y el OH⁻ forman agua y lo demás (el sodio, el cloruro) queda disuelto como una **sal** (*salt*):

- **HCl + NaOH da NaCl + H₂O**. Un mol de sosa por cada mol de HCl.
- **H₂SO₄ + 2 NaOH da Na₂SO₄ + 2 H₂O**. El sulfúrico tiene dos protones: hacen falta dos moles de sosa por cada mol de ácido. Es el error más típico en las cuentas.

Usamos masas atómicas redondeadas (H 1, C 12, O 16, Na 23, S 32, Cl 35,5): NaOH 40 g/mol, H₂SO₄ 98 g/mol, HCl 36,5 g/mol. El mol lo viste en «El mol: contar moléculas pesando».

**Cuenta 1. Neutralizar aguas ácidas.** Un tanque tiene 2000 L de aguas de lavado con HCl 0,05 mol/L (valor de ejemplo). Moles de HCl: 2000 × 0,05 = 100 mol. Hacen falta 100 mol de NaOH, que pesan 100 × 40 = 4000 g = 4,0 kg. Si se usa sosa al 50 % p/p, son 4,0 / 0,50 = 8,0 kg de disolución.

**Cuenta 2. Ajustar el pH de una reacción.** Al final de una etapa quedan en el reactor 1,96 kg de H₂SO₄ sin reaccionar (valor de ejemplo). Moles: 1960 / 98 = 20 mol. Con dos protones por molécula, hacen falta 40 mol de NaOH: 40 × 40 = 1600 g = 1,6 kg de NaOH, o 3,2 kg de sosa al 50 %. Es solo una estimación: la sosa se añade poco a poco y manda el pH medido, porque la masa puede llevar otras sustancias que también consumen base.

**Cuenta 3. Un derrame pequeño.** Se vierte 1 L de ácido clorhídrico al 35 %. Según la ficha de datos de seguridad de ese ácido en la app, su densidad es 1,17 g/cm³ y el derrame se neutraliza con carbonato o bicarbonato sódico o con cal. Masa: 1000 mL × 1,17 = 1170 g de disolución, de los que el 35 % es HCl: 409,5 g. Moles: 409,5 / 36,5 = 11,2 mol. El bicarbonato (NaHCO₃, 84 g/mol) reacciona mol a mol: 11,2 × 84 = 942 g, casi 1 kg, y hace espuma porque suelta CO₂. Es una base débil: un exceso no deja otro charco corrosivo, como lo dejaría la sosa. Cómo se actúa ante el derrame lo marca tu plan de emergencia.

### El calor: despacio y con frío
Neutralizar un ácido fuerte con una base fuerte desprende mucho calor. De golpe, la masa se calienta más deprisa de lo que enfría la camisa y puede hervir o salpicar: por eso la hoja dice «adición lenta, manteniendo T por debajo de...». Qué hace la camisa y por qué es peligroso acumular reactivo sin reaccionar está en «El reactor a fondo: agitación, intercambio de calor y protecciones».

### Por qué el pH decide dónde está tu producto
Muchos principios activos son aminas, es decir, bases. Una amina puede estar de dos formas:

- **Base libre** (*free base*): sin protón, sin carga. Se disuelve bien en disolventes orgánicos como el tolueno o el acetato de etilo.
- **Sal** (*salt*): con un protón aceptado, con carga positiva. Se disuelve bien en agua.

En **medio ácido** (mucho H⁺) la amina acepta un protón, se vuelve sal y se va a la fase acuosa. En **medio básico** lo suelta, vuelve a ser base libre y regresa a la fase orgánica. Es como un abrigo: con el protón puesto se queda en el agua; sin él, en el disolvente. Un ácido carboxílico hace lo contrario. La operación en el reactor está en «Extracción líquido-líquido y separación de fases».

Lo mismo explica por qué el pH hace **precipitar** un producto. Con ácido clorhídrico, una amina disuelta en un disolvente donde su sal no se disuelve forma el clorhidrato sólido. Y si a la sal disuelta en agua se le añade sosa, se libera la base libre, que precipita o forma otra capa. Por qué tantos principios activos son sales está en «Polimorfismo, sales y solvatos».

### Disoluciones reguladoras (tampones)
Una **disolución reguladora** o **tampón** (*buffer solution*) mezcla un ácido débil y su base conjugada, como ácido acético y acetato de sodio. Resiste los cambios de pH como un amortiguador: si entra ácido, el acetato lo recoge; si entra base, el acético le da un protón.

Su pH se calcula con la ecuación de **Henderson-Hasselbalch**:

> pH = pKa + log([base conjugada] / [ácido])

Ejemplo: 1 L con 0,10 mol de ácido acético y 0,10 mol de acetato. El cociente es 1, log 1 = 0, y el pH es el pKa: 4,76. Ahora añades 0,01 mol de HCl. El acetato atrapa esos protones: quedan 0,09 mol de acetato y 0,11 mol de acético. pH = 4,76 + log(0,09 / 0,11) = 4,67. Ha bajado menos de una décima. Si echas esos mismos 0,01 mol de HCl en 1 L de agua pura, el pH cae de 7 a 2.

Los tampones se usan para calibrar el pHmetro y en etapas que necesitan un pH estable.

### Medir el pH bien
- **Papel indicador** (*pH indicator paper*): cambia de color y se compara con una escala. Rápido y aproximado, por ejemplo para un efluente; no sirve para una especificación.
- **pHmetro** (*pH meter*): un electrodo da una tensión que depende del pH. Da un número con decimales que queda registrado.

Tres reglas del pHmetro. Primera: se calibra antes de usar con tampones que encierren el valor a medir, comprobando su lote y caducidad. Segunda: la temperatura influye por dos caminos. La tensión del electrodo por unidad de pH cambia con ella (de libro de texto, unos 59,2 mV por unidad a 25 °C y 64,1 mV a 50 °C), y eso lo corrige la compensación de temperatura del equipo. Pero el pH real de la muestra también cambia al calentarse o enfriarse, y eso no lo corrige nada: por eso la hoja dice a qué temperatura se mide. Tercera: el electrodo se limpia y no se deja secar. Cómo funciona y cómo deriva está en «Instrumentos de medida a fondo».

**Advertencia: el pH en disolventes orgánicos o mezclas no es el pH del agua.** La escala y los tampones están definidos en agua. En metanol, acetona o una mezcla con mucho disolvente, la lectura (a veces llamada pH aparente) no se puede comparar con un pH acuoso, y el disolvente daña la membrana. Solo vale lo que fije el procedimiento validado, por ejemplo diluir la muestra en agua de una forma fija.

### Seguridad: corrosivos y mezclas prohibidas
Los ácidos y bases concentrados destruyen piel y ojos. En sus etiquetas verás estas frases del Reglamento CLP, con su texto oficial:

- **H314**: «Provoca quemaduras graves en la piel y lesiones oculares graves».
- **H290**: «Puede ser corrosivo para los metales».

La sosa es traicionera: según su ficha en la app, en el ojo sigue penetrando y puede dejar ceguera, y sus quemaduras al principio pueden doler poco.

Reglas que no se discuten:

- **El ácido sobre el agua, nunca al revés**, poco a poco y agitando. El agua echada sobre ácido concentrado se calienta de golpe, hierve y salpica ácido. Con la sosa, igual: la sosa sobre el agua.
- **Ojos y cara**: gafas de montura integral y pantalla facial encima, como piden las fichas de la sosa y del clorhídrico de la app.
- **Ducha y lavaojos**: según la NTP 500 del INSST, son el sistema de emergencia habitual ante proyecciones con riesgo de quemadura química; deben estar cerca, con agua templada y apertura rápida. Esa nota cita como tiempo mínimo de lavado de ojos «habitualmente 20 minutos»; las fichas de la app piden al menos 15. Manda tu ficha y tu procedimiento. Nunca se neutraliza en el ojo: solo agua, mucha y enseguida.

Mezclas que liberan gases o calor peligrosos:

| Si se juntan | Qué pasa | Dónde está escrito |
|---|---|---|
| Ácido e hipoclorito (lejía) | Se desprende cloro, tóxico | CLP, frase EUH031, con el hipoclorito de sodio como ejemplo; ficha del ácido clorhídrico |
| Ácido y cianuros | Gas muy tóxico | CLP, frase EUH032, con las sales de cianuro de hidrógeno como ejemplo |
| Ácido y sulfuros | Sulfuro de hidrógeno, tóxico | Ficha del ácido clorhídrico; EUH031 cita el polisulfuro de bario |
| Sosa y aluminio, zinc o estaño | Hidrógeno, inflamable | Ficha de la sosa al 50 % |
| Ácido fuerte y base fuerte concentrados | Reacción violenta con mucho calor | Fichas del ácido clorhídrico y de la sosa |

Texto oficial: **EUH031** «En contacto con ácidos libera gases tóxicos» y **EUH032** «En contacto con ácidos libera gases muy tóxicos». Un producto con una de ellas nunca va a un tanque, desagüe o contenedor donde pueda haber ácido. Más en «Almacenamiento, emergencias y residuos a fondo».

Los números de esta lección son para entender y estimar. En planta manda siempre el procedimiento vigente (SOP): reactivo, concentración, velocidad de adición, rango de pH y temperatura son los de tu hoja.
`,
  plant: `
Turno de tarde. En el reactor R-112 tienes el intermedio ficticio AM-3, una amina, disuelto en 400 L de tolueno junto con impurezas neutras. La hoja dice: *«Añadir 300 L de HCl 1 M a T ≤ 25 °C en 30 min. Agitar 20 min. Comprobar pH de la fase acuosa ≤ 2. Decantar y separar la fase acuosa inferior al reactor R-114.»*

Antes de empezar piensas lo que va a pasar: en medio ácido la amina se vuelve clorhidrato, que se disuelve en agua y se va abajo. Las impurezas neutras se quedan en el tolueno.

Añades el ácido con la camisa en frío. La temperatura sube de 18 °C a 23 °C: es la neutralización. Mides el pH de la fase acuosa con el pHmetro PH-112, calibrado esa mañana: 1,4. Cumple. Separas mirando la mirilla y etiquetas las dos fases. El tolueno no se tira hasta que el laboratorio confirme que no lleva producto.

En el R-114 la hoja pide: *«Añadir 200 L de acetato de etilo. Ajustar a pH 11–12 con NaOH 4 M a T ≤ 25 °C.»* Ahora el camino es el inverso: al subir el pH la amina suelta el protón y vuelve al disolvente orgánico, que esta vez está arriba.

Añades la sosa despacio. A pH 9 la adición ya ha consumido buena parte de lo previsto y el pH empieza a cambiar más deprisa con cada litro, así que bajas el caudal de la bomba. Llegas a 11,3. Al lado, un compañero va a lavar con lejía una manguera que ha traído ácido: le pides que espere, que primero se aclare con agua según el procedimiento.
`,
  batchRecord: `
En la hoja de producción (*batch record*) de un ajuste de pH o una neutralización verás y anotarás:

- **Reactivo**: nombre, concentración (HCl 1 M, NaOH 4 M o sosa al 50 %), lote y cantidad real cargada en kg o L, con la balanza o el caudalímetro usado.
- **Adición**: hora de inicio y fin, caudal o tiempo de adición, y temperatura máxima alcanzada frente al límite (por ejemplo, T ≤ 25 °C).
- **pH**: valor real con decimales (11,3, no «cumple»), fase en la que se mide, temperatura de la muestra, hora y firma; comparado con el rango de la hoja.
- **pHmetro**: código del equipo (p. ej. PH-112), calibración del día con los tampones usados, su lote y caducidad.
- **Fases**: cuál se queda, cuál va a otro equipo y cuál a residuo, con su etiqueta; nada se tira hasta tener el resultado que pida la hoja.
- **Residuos**: neutralización de las aguas ácidas o básicas antes de enviarlas, con el pH final.
- **Incidencias**: si te pasas del rango de pH o de la temperatura, se anota el valor real, se para y se avisa al responsable; no se corrige por tu cuenta.
- **Verificación**: en pasos críticos, firma de una segunda persona.
`,
  terms: [
    { es: "Protón", en: "Proton (H⁺)", def: "Ion hidrógeno: un átomo de hidrógeno sin su electrón. Es lo que un ácido da y una base acepta." },
    { es: "Ion hidronio", en: "Hydronium ion (H₃O⁺)", def: "Molécula de agua con un protón pegado. Es la forma real del H⁺ en una disolución acuosa." },
    { es: "Ácido de Brønsted-Lowry", en: "Brønsted-Lowry acid", def: "Sustancia que da un protón a otra." },
    { es: "Base de Brønsted-Lowry", en: "Brønsted-Lowry base", def: "Sustancia que acepta un protón de otra." },
    { es: "Base conjugada", en: "Conjugate base", def: "Lo que queda de un ácido después de soltar su protón, como el cloruro del HCl o el acetato del ácido acético." },
    { es: "Producto iónico del agua", en: "Ion product of water (Kw)", def: "Producto de las concentraciones de H⁺ y OH⁻ en agua; vale 1,0 × 10⁻¹⁴ a 25 °C." },
    { es: "Logaritmo en base 10", en: "Base-10 logarithm (log)", def: "Número al que hay que elevar 10 para obtener un valor: log 1000 = 3, log 0,001 = −3." },
    { es: "pH", en: "pH", def: "Menos el logaritmo de la concentración de H⁺ en mol/L. Una unidad de pH es un factor 10 en H⁺." },
    { es: "pOH", en: "pOH", def: "Menos el logaritmo de la concentración de OH⁻. A 25 °C, pH + pOH = 14." },
    { es: "Ácido fuerte", en: "Strong acid", def: "Ácido que en agua suelta prácticamente todos sus protones, como el HCl." },
    { es: "Ácido débil", en: "Weak acid", def: "Ácido que en agua solo suelta una parte de sus protones, como el ácido acético." },
    { es: "pKa", en: "pKa", def: "Menos el logaritmo de la constante de acidez. Cuanto más bajo, más fácil suelta el protón el ácido." },
    { es: "Tampón", en: "Buffer solution", def: "Mezcla de un ácido débil y su base conjugada que resiste los cambios de pH." },
    { es: "Base libre", en: "Free base", def: "Forma sin protón de una amina, sin carga; suele disolverse en el disolvente orgánico y no en agua." },
  ],
  quiz: [
    {
      kind: "number",
      q: "¿Qué pH tiene una disolución de HCl 0,01 mol/L a 25 °C? (El HCl es un ácido fuerte y suelta todos sus protones.)",
      answer: 2,
      tolerance: 0.01,
      unit: "",
      explain: "[H⁺] = 0,01 = 10⁻² mol/L. pH = −log 10⁻² = 2.",
    },
    {
      kind: "number",
      q: "¿Qué pH tiene una disolución de KOH 0,001 mol/L a 25 °C? (La KOH es una base fuerte y suelta todo su OH⁻; pH + pOH = 14.)",
      answer: 11,
      tolerance: 0.01,
      unit: "",
      explain: "[OH⁻] = 10⁻³ mol/L, así que pOH = 3 y pH = 14 − 3 = 11.",
    },
    {
      kind: "number",
      q: "Una muestra da pH 4,0. ¿Cuál es su concentración de H⁺ en mol/L?",
      answer: 0.0001,
      tolerance: 0.01,
      unit: "mol/L",
      explain: "[H⁺] = 10⁻⁴ = 0,0001 mol/L. Es el camino inverso del pH: tecla 10ˣ con −4.",
    },
    {
      kind: "number",
      q: "¿Cuántas veces más H⁺ tiene una disolución de pH 3 que una de pH 6?",
      answer: 1000,
      tolerance: 0.001,
      unit: "veces",
      explain: "Tres unidades de pH de diferencia: 10 × 10 × 10 = 1000 veces.",
    },
    {
      kind: "number",
      q: "Un tanque de aguas de lavado contiene 50 mol de HCl. ¿Cuántos kg de NaOH pura hacen falta para neutralizarlo? (HCl + NaOH da NaCl + H₂O; masa molar de la NaOH: 40 g/mol.)",
      answer: 2,
      tolerance: 0.01,
      unit: "kg",
      explain: "Un mol de NaOH por mol de HCl: 50 mol × 40 g/mol = 2000 g = 2 kg de NaOH.",
    },
    {
      kind: "choice",
      q: "Hay que preparar en un depósito con agua una disolución diluida a partir de ácido sulfúrico concentrado. ¿Cómo se hace?",
      options: [
        "Se pone el ácido en el depósito y se le echa el agua encima de golpe",
        "Se mezclan los dos a la vez, en un cubo, y luego se vierte al depósito",
        "Se añade el ácido sobre el agua, poco a poco, agitando y con frío",
        "Se calienta antes el ácido para que se mezcle mejor con el agua fría",
      ],
      answer: 2,
      explain: "Siempre el ácido sobre el agua y despacio: el calor se reparte en mucha agua. El agua echada sobre ácido concentrado se calienta de golpe, hierve y salpica.",
    },
    {
      kind: "number",
      q: "Tienes HCl 0,1 mol/L (pH 1) y lo diluyes 100 veces con agua. ¿Qué pH tendrá a 25 °C?",
      answer: 3,
      tolerance: 0.01,
      unit: "",
      explain: "La concentración baja a 0,001 mol/L: pH 3. Cada dilución por 10 sube una unidad de pH, y dos diluciones por 10 son 100 veces.",
    },
    {
      kind: "choice",
      q: "El producto, una amina, está disuelto en tolueno. La hoja manda lavar con HCl 1 M y separar las fases. ¿Dónde estará el producto después del lavado?",
      options: [
        "En el tolueno, porque las aminas nunca pasan al agua",
        "En la fase acuosa, como sal, porque en medio ácido acepta un protón",
        "Repartido por igual entre las dos fases, sin que influya el pH",
        "Precipitado en el fondo, porque el ácido destruye la amina",
      ],
      answer: 1,
      explain: "En medio ácido la amina acepta un protón, se vuelve sal con carga y se disuelve en el agua. En medio básico volvería al disolvente orgánico.",
    },
    {
      kind: "choice",
      q: "Un compañero quiere limpiar con lejía un cubeto donde ha goteado ácido clorhídrico. ¿Qué le dices?",
      options: [
        "Que no: ácido con hipoclorito desprende cloro, un gas tóxico",
        "Que sí, pero con la lejía diluida y la puerta de la sala abierta",
        "Que sí, porque la lejía es básica y neutraliza el ácido sin riesgo",
        "Que da igual el producto mientras lleve gafas y guantes puestos",
      ],
      answer: 0,
      explain: "La frase EUH031 del CLP pone el hipoclorito de sodio como ejemplo de sustancia que con ácidos libera gases tóxicos. El derrame de ácido se neutraliza con bicarbonato, carbonato o cal.",
    },
    {
      kind: "choice",
      q: "Te piden medir el pH de una muestra con un 80 % de metanol con el pHmetro del agua. ¿Qué es lo correcto?",
      options: [
        "Medir directamente y comparar con la especificación acuosa",
        "Calibrar con tampones y dar la lectura como pH de agua",
        "Calentar la muestra a 50 °C para que el electrodo responda mejor",
        "Seguir el método validado: en mezclas la lectura no es un pH acuoso",
      ],
      answer: 3,
      explain: "La escala de pH y los tampones están definidos en agua. En mezclas con disolvente la lectura no es comparable y el disolvente daña la membrana: solo vale el método que fije el procedimiento.",
    },
  ],
};
