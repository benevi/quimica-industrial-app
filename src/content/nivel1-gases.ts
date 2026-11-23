import type { Lesson } from "./types";

export const gasesAFondo: Lesson = {
  slug: "gases-a-fondo",
  level: 2,
  order: 11.2,
  title: "Los gases a fondo: presión, mezclas y gases licuados",
  titleEn: "Gases in depth",
  minutes: 38,
  summary:
    "El valor exacto de la constante R, las leyes de Boyle, Charles y Gay-Lussac con cuentas de reactor, P·V = n·R·T con bar y litros, los gases reales y el factor Z, las mezclas y las presiones parciales de Dalton (oxígeno tras los ciclos de nitrógeno y vapor de tolueno en el espacio de cabeza), Kp y su relación con Kc, la temperatura crítica, los gases licuados (propano, amoniaco, cloro, CO₂) con su presión de vapor y lo que eso cambia en la seguridad de las botellas.",
  body: `
Ya tienes piezas sueltas: P · V = n · R · T en «El mol a fondo», la ley de Boyle y las botellas en «Nitrógeno, aire comprimido y vacío a fondo», los ciclos en «Inertización a fondo» y K con Le Châtelier en «Equilibrio químico a fondo». Aquí se juntan y se añade lo que falta: las demás leyes, las mezclas, los equilibrios entre gases y los gases licuados.

### Qué es la presión de un gas
Un gas son moléculas muy separadas que vuelan y golpean las paredes. Millones de millones de golpes por segundo, repartidos sobre la pared, son la **presión** (*pressure*). Más moléculas, menos sitio o más temperatura (moléculas más rápidas) dan más golpes y más presión.

Dos reglas de siempre: en las cuentas de gases la presión va en **absoluta** (manométrica + atmosférica; aquí la atmósfera se redondea a 1 bar) y la temperatura en **kelvin** (T = t + 273,15).

### La constante R, con todas sus cifras
El Real Decreto 2032/2009 de unidades legales fija dos valores exactos: la **constante de Boltzmann** (*Boltzmann constant*), k = 1,380 649 × 10⁻²³ J/K, y la **constante de Avogadro** (*Avogadro constant*), 6,022 140 76 × 10²³ por mol. La constante de los gases es una por la otra:

> R = 6,022 140 76 × 10²³ × 1,380 649 × 10⁻²³ = 8,314 462 618… J/(mol·K)

Es exacto por definición; para las cuentas basta 8,314, con Pa y m³. En planta lees bar y litros; como 1 J = 1 Pa·m³, 1 bar = 100 000 Pa y 1 m³ = 1000 L:

> R = 8,314 462 6 J/(mol·K) = **0,083 145 L·bar/(mol·K)**

### Las tres leyes, y una sola ecuación
Si no entra ni sale gas, n y R no cambian y queda P · V / T = constante. De ahí salen tres leyes, según qué se deje fijo:

| Ley | Qué se deja fijo | Qué dice | Fórmula |
|---|---|---|---|
| **Boyle** (*Boyle's law*) | Temperatura | Si aprietas el gas a la mitad de sitio, empuja el doble | P₁ · V₁ = P₂ · V₂ |
| **Charles** (*Charles's law*) | Presión | Si calientas el gas, ocupa más, en proporción a T en kelvin | V₁ / T₁ = V₂ / T₂ |
| **Gay-Lussac** (*Gay-Lussac's law*) | Volumen | Si calientas un recipiente cerrado, la presión sube en proporción a T en kelvin | P₁ / T₁ = P₂ / T₂ |

Si cambian las tres cosas, la **ley combinada** (*combined gas law*):

> P₁ · V₁ / T₁ = P₂ · V₂ / T₂

**Ejercicio resuelto 1. Cargar líquido con el venteo cerrado (Boyle).** El reactor R-204 tiene 6000 L. Hay 2000 L de líquido, así que arriba quedan 4000 L de nitrógeno a 1,05 bar a (0,05 bar g, valor de ejemplo). Se bombean 1000 L más con el venteo cerrado: el gas pasa de 4000 a 3000 L.

- P₂ = P₁ · V₁ / V₂ = 1,05 × 4000 / 3000 = **1,40 bar a**, es decir, 0,40 bar g.

El líquido hace de pistón. Por eso la hoja pide el venteo abierto, o el control de presión en marcha, al cargar.

**Ejercicio resuelto 2. Calentar con el venteo abierto (Charles).** Esos 4000 L de nitrógeno (sin disolvente) pasan de 20 a 60 °C con el venteo abierto, a presión constante.

1. Kelvin: T₁ = 293,15 K; T₂ = 333,15 K.
2. V₂ = V₁ · T₂ / T₁ = 4000 × 333,15 / 293,15 = **4546 L**.
3. Como el reactor solo tiene 4000 L de hueco, salen por el venteo **546 L** de gas.

Si lo hubieras hecho en grados Celsius, 4000 × 60 / 20 = 12 000 L: tres veces más, y falso.

**Ejercicio resuelto 3. Pasar a condiciones normales (combinada).** 4000 L de nitrógeno a 1,5 bar a y 40 °C, expresados en las condiciones normales del reglamento de equipos a presión (15 °C y 1,013 bar a).

> V₂ = V₁ × (P₁ / P₂) × (T₂ / T₁) = 4000 × (1,5 / 1,013) × (288,15 / 313,15) = **5450 L normales**

### P · V = n · R · T en bar y litros
**Ejercicio resuelto 4. Los moles de una botella.** Una botella de nitrógeno de 50 L está a 200 bar a y 20 °C.

> n = P · V / (R · T) = 200 × 50 / (0,083 145 × 293,15) = **410 mol**

Con 28,01 g/mol, unos 11,5 kg. La botella real tiene menos.

### Los gases reales y el factor Z
La ecuación ideal supone que las moléculas no ocupan sitio ni se atraen. A presión ambiente, muy separadas, casi no importa; a cientos de bar, sí. Se corrige con el **factor de compresibilidad** (*compressibility factor*), Z:

> P · V = Z · n · R · T

Z = 1 es el gas ideal. Datos del NIST (el instituto de normas de Estados Unidos, que publica tablas de propiedades):

| Gas y condiciones | Moles por litro según el NIST | Según la ecuación ideal | Z |
|---|---|---|---|
| Nitrógeno, 20 °C, 1 bar | 0,041 04 | 0,041 03 | 1,000 |
| Nitrógeno, 20 °C, 200 bar | 7,801 | 8,206 | 1,05 |
| CO₂, 20 °C, 41 bar | 2,298 | 1,682 | 0,73 |

- **A presión ambiente** la ecuación ideal acierta: las cuentas de reactores, a pocos bar, son buenas.
- **El nitrógeno a 200 bar** tiene Z mayor que 1: las moléculas, muy juntas, estorban con su propio tamaño. La botella de 50 L tiene 7,801 × 50 = **390 mol**, unos 10,9 kg: un 5 % menos de lo que da la cuenta ideal.
- **El CO₂ a 41 bar** tiene Z menor que 1: sus moléculas se atraen y se deja apretar más. Está cerca de licuarse.

Z puede ser mayor o menor que 1. La cifra exacta de una botella la da el proveedor.

### Mezclas de gases: la ley de Dalton
En una mezcla, cada gas golpea las paredes como si estuviera solo. La presión que haría estando solo es su **presión parcial** (*partial pressure*). La **ley de Dalton** (*Dalton's law*) dice que la presión total es la suma:

> P total = p₁ + p₂ + p₃ + …

Sale de la ecuación: cada gas cumple p = n · R · T / V y, al sumar, queda n total · R · T / V. De ahí:

> p de un gas = x × P total

donde x es la **fracción molar** (*mole fraction*): los moles de ese gas entre los moles totales. En un gas ideal coincide con el **porcentaje en volumen** (*percent by volume*), lo que da un analizador de oxígeno.

En el aire, a 1013 mbar, el oxígeno tiene 0,21 × 1013 = 213 mbar.

**Ejercicio resuelto 5. Los ciclos de inertización, vistos con Dalton.** Los de «Inertización a fondo» y del simulador: vacío a 200 mbar abs y nitrógeno puro hasta 1000 mbar abs.

| Momento | Presión total | % de O₂ (fracción) | Presión parcial de O₂ |
|---|---|---|---|
| Aire al empezar | 1000 mbar | 21 % | 210 mbar |
| Tras el vacío | 200 mbar | 21 % | 42 mbar |
| Tras el nitrógeno, ciclo 1 | 1000 mbar | 4,2 % | 42 mbar |
| Ciclo 2 | 1000 mbar | 0,84 % | 8,4 mbar |
| Ciclo 3 | 1000 mbar | 0,17 % | 1,7 mbar |

**El vacío baja la presión parcial** del oxígeno, no su porcentaje: la bomba se lleva todo por igual. **El nitrógeno no toca la presión parcial**, pero diluye: 42 / 1000 = 4,2 %. El límite de la hoja va en porcentaje, que es lo que mide el analizador.

**Ejercicio resuelto 6. El vapor del disolvente también suma.** El R-204 tiene tolueno a 20 °C con nitrógeno encima, a 1050 mbar abs en total. Con las constantes de Antoine del NIST, el tolueno tiene a 20 °C unos 29 mbar de presión de vapor (las del simulador dan 29,1).

1. Fracción de tolueno en el gas: 29 / 1050 = **2,8 %** en volumen.
2. El nitrógeno pone el resto: 1050 − 29 = 1021 mbar.

Se cierra todo y se calienta a 60 °C:

- **El nitrógeno, por Gay-Lussac:** 1021 × 333,15 / 293,15 = 1160 mbar.
- **El tolueno, por su presión de vapor:** a 60 °C, según el NIST, unos 185 mbar. Se ha multiplicado por seis.
- **Total:** 1160 + 185 = **1345 mbar abs**, unos 0,35 bar g. Si dentro solo hubiera nitrógeno a 1050 mbar abs, llegaría a 1050 × 333,15 / 293,15 = 1193 mbar abs, unos 0,19 bar g.

Con disolvente dentro, al calentar la presión sube más que con el gas solo, y cerca de la ebullición el vapor se dispara («El reactor a fondo»).

### Equilibrios entre gases: Kp y Kc
En «Equilibrio químico a fondo» K iba con concentraciones en mol/L. Entre gases es cómodo usar presiones parciales. Para a A ⇌ b B:

> Kc = [B]ᵇ / [A]ᵃ y Kp = (p B)ᵇ / (p A)ᵃ

Kp va con presiones en bar: el real decreto de unidades recuerda que los datos termodinámicos se refieren a la presión normal de 1 bar.

**De una a otra.** Cada presión parcial es p = (n / V) · R · T = c · R · T. Al sustituir en Kp sobra un factor R · T por cada mol de gas de diferencia entre los lados:

> Kp = Kc · (R · T)^Δn, con Δn = moles de gas de productos − moles de gas de reactivos

Con R = 0,083 145 L·bar/(mol·K). Si Δn = 0, Kp = Kc.

**Ejercicio resuelto 7. De Kc a Kp.** Reacción ficticia A(g) ⇌ 2 B(g), con Kc = 0,010 mol/L a 400 K (valores de ejemplo).

1. Δn = 2 − 1 = 1.
2. R · T = 0,083 145 × 400 = 33,26 L·bar/mol.
3. Kp = 0,010 × 33,26 = **0,333**.

**Ejercicio resuelto 8. La presión mueve este equilibrio.** Partes de 1 mol de A puro; α es la fracción que se descompone. Quedan (1 − α) de A y 2α de B, de un total de (1 + α). Con Dalton, p A = (1 − α) / (1 + α) × P y p B = 2α / (1 + α) × P. En Kp, simplificando:

> Kp = 4 · α² · P / (1 − α²), y despejando α = raíz de (Kp / (Kp + 4 · P))

| Presión total | α | Qué queda |
|---|---|---|
| 1 bar a | raíz de (0,333 / 4,333) = 0,277 | Se descompone un 27,7 % de A |
| 10 bar a | raíz de (0,333 / 40,33) = 0,091 | Solo un 9,1 % |

Subir la presión empuja hacia el lado con **menos moléculas de gas** (aquí, A), como anunciaba Le Châtelier. Kp no cambia: cambia el reparto de la mezcla. Si Δn = 0, la presión no mueve el equilibrio.

### La temperatura crítica: por qué unos gases se licúan y otros no
Al apretar un gas sus moléculas se acercan y, si no van demasiado rápido, se juntan en líquido. Por encima de la **temperatura crítica** (*critical temperature*) no hay presión que lo licúe. Datos del NIST:

| Gas | Temperatura crítica | Hierve a 1 atm |
|---|---|---|
| Nitrógeno | −147 °C | −196 °C |
| CO₂ | 31,0 °C | (a 1 atm no hay líquido: el sólido pasa directo a gas) |
| Propano | 96,8 °C | −42 °C |
| Amoniaco | 132,3 °C | −33 °C |
| Cloro | 143,8 °C | −34 °C |

El nitrógeno, a 200 bar y temperatura ambiente, sigue siendo todo gas; el propano, el amoniaco y el cloro se licúan con pocos bar. El Reglamento de almacenamiento de productos químicos (Real Decreto 656/2017, artículo 2) clasifica así los gases envasados:

- **Gas comprimido** (*compressed gas*): totalmente gaseoso a −50 °C; incluye los de temperatura crítica por debajo de −50 °C, como el nitrógeno.
- **Gas licuado** (*liquefied gas*): parcialmente líquido por encima de −50 °C. **A alta presión** si su temperatura crítica está entre −50 y +65 °C (el CO₂) y **a baja presión** si está por encima de +65 °C (propano, amoniaco, cloro).
- **Gas licuado refrigerado** (*refrigerated liquefied gas*): líquido por estar muy frío, como el nitrógeno del tanque criogénico.
- **Gas disuelto** (*dissolved gas*): disuelto en un disolvente dentro del envase.

### Dentro de una botella de gas licuado
Una botella de propano tiene líquido abajo y vapor arriba, en equilibrio, como la botella de metanol de «La materia a fondo». La presión dentro **es la presión de vapor del líquido** y solo depende de la temperatura. Datos del NIST, en bar absolutos (el cloro, con sus constantes de Antoine):

| Gas licuado | A 20 °C | A 50 °C | Cuánto sube |
|---|---|---|---|
| Propano | 8,36 bar | 17,13 bar | × 2,0 |
| Amoniaco | 8,57 bar | 20,33 bar | × 2,4 |
| Cloro | 6,7 bar | 14,5 bar | × 2,2 |
| CO₂ | 57,3 bar | (sin líquido: pasa de 31 °C) | — |

Las fichas internacionales de seguridad química coinciden: 840 kPa el propano y 673 kPa el cloro a 20 °C. Cuatro consecuencias:

**1. El manómetro no dice cuánto queda.** Mientras quede líquido, marca su presión de vapor, esté llena o casi vacía; solo baja cuando ya queda poco. Lo que queda se sabe por **peso**: el reglamento habla de botellas de cloro «de 50 a 100 kilogramos». En un gas comprimido, en cambio, la presión sí mide el contenido (ley de Boyle).

**2. El calor sube la presión mucho más que en un gas comprimido.** De 20 a 50 °C, una botella de nitrógeno a 200 bar sube por Gay-Lussac a 200 × 323,15 / 293,15 = 220 bar, un 10 %; una de propano, de 8,36 a 17,13 bar, el doble. Y el líquido se dilata: el propano pasa de 500 a 449 kg/m³ (NIST), un 11 % más de volumen. Por eso no se llenan del todo: para el amoniaco, el reglamento pide que el líquido no pase del 95 % del volumen tras dilatarse a la temperatura máxima de servicio; para el cloro, 1250 kg por metro cúbico como máximo. La instrucción MIE APQ-5 pide que las zonas de almacenamiento de botellas no pasen de 50 °C.

**3. Sacar gas enfría la botella.** Evaporar un kilo de propano a 20 °C pide unos 344 kJ (NIST), el calor latente de «La materia a fondo». Lo toma del líquido, que se enfría y baja su presión de vapor: el caudal tiene un tope. La instrucción del cloro (MIE APQ-3, artículo 23) dice que el caudal extraíble viene impuesto por la temperatura del cloro y prohíbe calentar el recipiente de forma que la pared pase de 40 °C.

**4. No es lo mismo que salga gas que que salga líquido.** Un litro de propano líquido pesa 500 g: 500 / 44,1 = 11,3 mol, que a 20 °C y 1,013 bar ocupan 11,3 × 0,083 145 × 293,15 / 1,013 = **273 L** de gas. Por eso la instrucción del cloro manda extraer el gas con la válvula arriba, y las fichas del propano, el amoniaco y el cloro indican, si una botella fuga, girarla para que el escape quede arriba y salga gas, no líquido. El líquido que escapa se evapora de golpe y puede producir congelación.

### Tres gases licuados, de cerca
Datos de las fichas internacionales de seguridad química (ICSC) de la OIT y la OMS, en su versión española del INSST:

| | Propano | Amoniaco anhidro | Cloro |
|---|---|---|---|
| Vapor frente al aire | 1,6 veces más denso: va al suelo y a los fosos | 0,60: más ligero, sube | 2,5 veces más denso |
| Peligro principal | Extremadamente inflamable; desplaza el oxígeno en zonas bajas | Tóxico y corrosivo; inflamable | Mortal si se inhala; comburente y corrosivo |
| Qué dicen sobre el agua | No echar nunca chorros de agua sobre el líquido | No echar nunca chorros de agua sobre el líquido | No echar agua sobre una botella con fuga, para no corroerla |

Ante una fuga, las tres fichas piden evacuar la zona y que actúe personal con equipo de respiración autónomo. Las reglas generales de las botellas están en «Nitrógeno, aire comprimido y vacío a fondo».

### Qué hace el operador con todo esto
1. **Pasa a absoluta y a kelvin** antes de cualquier cuenta de gases.
2. **Antes de cargar líquido o de calentar**, comprueba que el gas de arriba tiene salida (venteo o control de presión), como pida la hoja.
3. **Recuerda que el vapor suma**: con disolvente, un equipo cerrado sube más de presión que con gas solo.
4. **En un gas licuado, el manómetro no dice el contenido**: se controla por peso.
5. **No calientes nunca una botella**; si fuga, avisa y aléjate.

Las cuentas y los ejemplos de esta lección son para entender. En planta manda siempre el procedimiento vigente (SOP): presiones, temperaturas, gases y límites son los de tu hoja y los de tu planta.
`,
  plant: `
Turno de mañana. Preparas el reactor R-218 para una etapa del intermedio ficticio QN-31. La hoja dice: *«Inertizar con 3 ciclos de vacío hasta 200 mbar abs y nitrógeno hasta 1000 mbar abs. O₂ ≤ 2,0 %. Cargar 2500 L de tolueno con el venteo al lavador abierto. Calentar a 60 °C con el control de presión PIC-218 en 0,05 bar g.»*

Haces la cuenta: el oxígeno debería quedar en 4,2 %, 0,84 % y 0,17 %. Anotas las presiones reales de cada ciclo. El analizador AI-218 marca 0,3 %. Cumple: lo anotas y cargas.

Al calentar, la tendencia muestra que el PIC-218 abre el venteo cada pocos minutos. Te cuadra: el nitrógeno se dilata y el tolueno suelta más vapor; cerrado, partiendo de 0,05 bar g a 20 °C, a 60 °C rondaría 0,35 bar g.

Después toca revisar la botella de amoniaco B-07 (código ficticio) del laboratorio. El manómetro marca lo mismo que ayer, 7,6 bar g, y un compañero dice que «está llena». No se puede saber así: mientras quede líquido, marca su presión de vapor. La pesas según el procedimiento: queda muy poco sobre la tara. Se cambia.

Al retirarla notas la botella fría y con escarcha en la parte baja. Lo más probable es que el líquido se haya enfriado al evaporarse; aun así compruebas, como dice el procedimiento, que no fuga antes de moverla. La dejas de pie, con la caperuza puesta, en la zona de vacías, y lo anotas todo.
`,
  batchRecord: `
En la hoja de producción (*batch record*) los gases aparecen como presiones, temperaturas y porcentajes. Lo que verías y anotarías:

- **Presiones con su unidad completa**: mbar abs, bar a o bar g. El valor real leído, no el teórico.
- **Estado del venteo** al cargar líquidos y al calentar: abierto, cerrado o con el control de presión en automático, y su consigna.
- **Ciclos de inertización**: presión baja y alta alcanzadas en cada ciclo.
- **Oxígeno medido**, en %, con la presión del equipo en el momento de medir, la hora y el analizador usado.
- **Presión máxima alcanzada** al calentar, comparada con el máximo de la hoja.
- **Botellas de gas en uso** (si tu puesto las tiene): gas, código o lote, y para gases licuados el peso en el cambio, no solo la presión.
- **Incidencias**: alarma de presión, venteo que no abre, botella fría o con escarcha, olor o fuga, con la hora y a quién se avisó.
`,
  terms: [
    { es: "Constante de los gases", en: "Molar gas constant (R)", def: "Producto de la constante de Avogadro por la de Boltzmann: 8,314 462 618… J/(mol·K), igual a 0,083 145 L·bar/(mol·K)." },
    { es: "Ley de Boyle", en: "Boyle's law", def: "A temperatura constante, presión por volumen se mantiene: P₁ · V₁ = P₂ · V₂." },
    { es: "Ley de Charles", en: "Charles's law", def: "A presión constante, el volumen de un gas es proporcional a su temperatura en kelvin." },
    { es: "Ley de Gay-Lussac", en: "Gay-Lussac's law", def: "A volumen constante, la presión de un gas es proporcional a su temperatura en kelvin." },
    { es: "Ley combinada de los gases", en: "Combined gas law", def: "P₁ · V₁ / T₁ = P₂ · V₂ / T₂, para una misma cantidad de gas." },
    { es: "Factor de compresibilidad", en: "Compressibility factor (Z)", def: "Corrección de un gas real: P · V = Z · n · R · T. Vale 1 en el gas ideal y puede ser mayor o menor que 1." },
    { es: "Presión parcial", en: "Partial pressure", def: "Presión que haría un gas de una mezcla si ocupara él solo todo el recipiente: fracción molar por presión total." },
    { es: "Ley de Dalton", en: "Dalton's law", def: "La presión total de una mezcla de gases es la suma de las presiones parciales." },
    { es: "Fracción molar", en: "Mole fraction", def: "Moles de un componente divididos entre los moles totales; en un gas ideal coincide con el porcentaje en volumen." },
    { es: "Kp", en: "Pressure equilibrium constant (Kp)", def: "Constante de equilibrio escrita con presiones parciales en bar. Kp = Kc · (R · T)^Δn." },
    { es: "Temperatura crítica", en: "Critical temperature", def: "Temperatura por encima de la cual un gas no se puede licuar por mucha presión que se aplique." },
    { es: "Gas licuado", en: "Liquefied gas", def: "Gas que, envasado a presión, está en parte líquido por encima de −50 °C, como el propano, el amoniaco o el cloro." },
    { es: "Gas comprimido", en: "Compressed gas", def: "Gas que, envasado a presión, es totalmente gaseoso a −50 °C, como el nitrógeno o el aire." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Un espacio de cabeza tiene 3000 L de nitrógeno a 20 °C (293,15 K). Se calienta a 50 °C (323,15 K) con el venteo abierto, a presión constante. ¿Qué volumen ocuparía ese gas?",
      answer: 3307,
      tolerance: 0.01,
      unit: "L",
      explain: "Ley de Charles: V₂ = 3000 × 323,15 / 293,15 = 3307 L. Los 307 L que no caben salen por el venteo.",
    },
    {
      kind: "number",
      q: "Un depósito cerrado, con solo nitrógeno, está a 1,2 bar a y 20 °C (293,15 K). Se calienta a 70 °C (343,15 K). ¿Qué presión absoluta alcanza?",
      answer: 1.405,
      tolerance: 0.01,
      unit: "bar a",
      explain: "Ley de Gay-Lussac: P₂ = 1,2 × 343,15 / 293,15 = 1,405 bar a, es decir, unos 0,4 bar g.",
    },
    {
      kind: "number",
      q: "Una botella de 10 L de nitrógeno está a 150 bar a y 20 °C (293,15 K). Con R = 0,083145 L·bar/(mol·K) y la ecuación de los gases ideales, ¿cuántos moles contiene?",
      answer: 61.5,
      tolerance: 0.01,
      unit: "mol",
      explain: "n = P · V / (R · T) = 150 × 10 / (0,083145 × 293,15) = 61,5 mol. A esta presión el valor real es algo menor, porque Z es mayor que 1.",
    },
    {
      kind: "number",
      q: "Tras dos ciclos de inertización, el reactor está a 1000 mbar abs con un 0,84 % de oxígeno. ¿Cuál es la presión parcial del oxígeno?",
      answer: 8.4,
      tolerance: 0.01,
      unit: "mbar",
      explain: "Ley de Dalton: p = fracción × presión total = 0,0084 × 1000 = 8,4 mbar.",
    },
    {
      kind: "number",
      q: "En el espacio de cabeza de un reactor a 25 °C la presión total es 1200 mbar abs y la presión de vapor del tolueno es 38 mbar. ¿Qué porcentaje en volumen del gas es tolueno?",
      answer: 3.17,
      tolerance: 0.02,
      unit: "% v/v",
      explain: "Fracción molar = presión parcial / presión total = 38 / 1200 = 0,0317, es decir, 3,17 % en volumen.",
    },
    {
      kind: "number",
      q: "Para una reacción entre gases con Δn = +1, Kc vale 0,050 mol/L a 300 K. Con R = 0,083145 L·bar/(mol·K), ¿cuánto vale Kp?",
      answer: 1.247,
      tolerance: 0.01,
      unit: "",
      explain: "Kp = Kc · (R · T)^Δn = 0,050 × 0,083145 × 300 = 1,247.",
    },
    {
      kind: "choice",
      q: "Para la reacción entre gases A(g) ⇌ 2 B(g), en equilibrio, se sube la presión total comprimiendo la mezcla. ¿Qué ocurre?",
      options: [
        "Se forma más A, el lado con menos moléculas de gas",
        "Se forma más B, porque más presión siempre da más producto",
        "No cambia nada, porque la presión nunca mueve un equilibrio",
        "Kp aumenta en proporción a la nueva presión total",
      ],
      answer: 0,
      explain: "Al comprimir, el equilibrio se desplaza hacia el lado con menos moles de gas, aquí A. Kp no cambia: cambia el reparto de la mezcla.",
    },
    {
      kind: "choice",
      q: "¿Cuál de estos gases sigue siendo todo gas en una botella a 200 bar y 20 °C, por mucho que se apriete?",
      options: [
        "El propano, porque es un hidrocarburo muy ligero",
        "El nitrógeno, porque está por encima de su temperatura crítica",
        "El amoniaco, porque hierve a −33 °C a presión ambiente",
        "El cloro, porque su vapor pesa más que el aire",
      ],
      answer: 1,
      explain: "La temperatura crítica del nitrógeno es −147 °C: a 20 °C no hay presión que lo licúe. Propano, amoniaco y cloro tienen la suya por encima de 90 °C y se licúan con pocos bar.",
    },
    {
      kind: "choice",
      q: "El manómetro de una botella de propano marca hoy lo mismo que hace una semana, y se ha estado usando. ¿Qué concluyes?",
      options: [
        "Que está llena, porque la presión no ha bajado",
        "Que el manómetro está averiado y hay que cambiarlo",
        "Que la presión no dice cuánto queda; el contenido se sabe por peso",
        "Que se ha calentado y conviene enfriarla con agua",
      ],
      answer: 2,
      explain: "Mientras quede líquido, la botella marca la presión de vapor del propano, que solo depende de la temperatura. Lo que queda se sabe pesándola.",
    },
    {
      kind: "choice",
      q: "Una botella de gas licuado tumbada empieza a fugar por un punto del cuerpo. Según las fichas internacionales de seguridad química, ¿qué se busca al moverla?",
      options: [
        "Echar agua a chorro sobre el líquido para enfriarlo",
        "Dejar el escape abajo para que se vacíe antes",
        "Calentarla para que salga todo el gas cuanto antes",
        "Girarla para que el escape quede arriba y salga gas, no líquido",
      ],
      answer: 3,
      explain: "Las fichas indican girar la botella con el punto de escape arriba: así sale vapor y no líquido, que se evapora de golpe en cientos de litros de gas y puede congelar. Primero se avisa y actúa personal con equipo adecuado.",
    },
  ],
};
