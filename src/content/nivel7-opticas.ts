import type { Lesson } from "./types";

export const tecnicasOpticasAFondo: Lesson = {
  slug: "tecnicas-opticas-a-fondo",
  level: 7,
  order: 13.7,
  title: "Refractometría, polarimetría y turbidez a fondo",
  titleEn: "Refractometry, polarimetry and turbidity in depth",
  minutes: 38,
  summary:
    "Cómo cambia de dirección la luz al entrar en un líquido (índice de refracción y ley de Snell), cómo mide eso un refractómetro y por qué hay que corregir la temperatura; qué es la luz polarizada, cómo se calcula la rotación específica y qué dice de la pureza enantiomérica; cómo se mide la turbidez con un nefelómetro y la formacina, con los límites del agua de consumo; y la escala de color platino-cobalto.",
  body: `
En «Espectroscopia a fondo: lo que la luz cuenta de una molécula (UV-Vis e infrarrojo)» viste cuánta luz **absorbe** una muestra. Aquí verás cuánto se **frena y se tuerce** al entrar en un líquido (refractometría), cuánto **gira** al cruzar un producto quiral (polarimetría), cuánta se **desvía** al chocar con partículas (turbidez) y la escala de color del agua. Son ensayos sencillos y baratos, muy comunes en el laboratorio de control.

### Cuatro preguntas, cuatro técnicas
| Pregunta | Técnica | Qué da |
|---|---|---|
| ¿Este líquido es el que dice la etiqueta? ¿Qué concentración tiene? | Refractometría | El índice de refracción, un número como 1,3330 |
| ¿Cuánto gira la luz polarizada este producto quiral? | Polarimetría | Un ángulo en grados y, con una cuenta, la rotación específica |
| ¿Cuántas partículas finas lleva este agua o esta disolución? | Turbidimetría y nefelometría | Unidades de turbidez (UNF o NTU) |
| ¿Qué color tiene este agua? | Colorimetría | mg de platino por litro (escala platino-cobalto) |

### La luz se frena al entrar en un líquido
En el vacío la luz va a 299 792 458 m/s, la velocidad c que ya conoces. Dentro del agua, del vidrio o de un disolvente va **más despacio**. El **índice de refracción** (*refractive index*, símbolo n) mide cuánto. La definición oficial, tal como la recoge el método del BOE para aceites (Orden de 31 de enero de 1977):

> n = velocidad de la luz en el vacío / velocidad de la luz en la sustancia

Por comodidad, dice el mismo método, en la práctica se refiere al aire. Por eso n no tiene unidades y siempre es mayor que 1.

**Ejercicio resuelto 1.** El agua destilada tiene n = 1,3330 a 20 °C, el valor con el que se ajusta el refractómetro en el método oficial de zumos de uva (BOE, Orden de 27 de abril de 1988). ¿A qué velocidad va la luz en el agua?

> v = c / n = 299 792 458 / 1,3330 = 224 900 000 m/s, unos 225 000 km/s


### La ley de Snell: por qué la cuchara parece rota
Una cuchara en un vaso de agua parece partida: la luz cambia de **dirección** al salir del agua. Imagina un carro de la compra que pasa en diagonal del asfalto a la arena: la rueda que pisa primero la arena se frena antes y el carro gira. Con la luz pasa lo mismo al pasar a un medio más lento.

La regla que da cuánto gira es la **ley de Snell** (*Snell's law*). El libro de instrumentación de Kuphaldt la escribe con velocidades, y el BOE dice que n es también la relación entre el seno del ángulo de incidencia y el del ángulo de refracción. Con índices queda así:

> n₁ · sen θ₁ = n₂ · sen θ₂

Los ángulos se miden desde la **normal**, una línea perpendicular a la superficie. El **seno** es una función que da la calculadora: sen 30° = 0,5 y sen 90° = 1.

**Ejercicio resuelto 2.** Un rayo pasa del aire (n₁ ≈ 1) al agua (n₂ = 1,3330) con 30° respecto a la normal.

sen θ₂ = 1 × 0,5 / 1,3330 = 0,3751, y θ₂ = **22,0°**. El rayo se acerca a la normal: entra en un medio más lento y se «endereza».

### El ángulo límite: la idea del refractómetro
Ahora al revés: la luz va de un medio con n alto a otro con n bajo. Se aleja de la normal, y hay un ángulo en el que el rayo sale rozando la superficie (θ₂ = 90°). Es el **ángulo límite** o crítico (*critical angle*). Por encima, la luz ya no pasa: se refleja entera. Kuphaldt lo explica con la fibra óptica, que guía la luz justo así.

Con sen 90° = 1, la ley de Snell da:

> sen θc = n de la muestra / n del prisma

**Ejercicio resuelto 3.** Prisma de n = 1,75 (valor de ejemplo) y agua (1,3330): sen θc = 1,3330 / 1,75 = 0,7617, θc = **49,6°**. Con un líquido de n = 1,4283, θc = **54,7°**: cada líquido tiene su ángulo límite. Muchos refractómetros de laboratorio se basan en esto: la muestra se pone sobre un prisma de índice conocido y el equipo busca la frontera entre zona clara y zona oscura, que marca el ángulo límite, y la convierte en n. La guía ICH Q6A, sobre especificaciones, cita el índice de refracción entre las propiedades fisicoquímicas que puede llevar un principio activo y nombra la **refractometría de Abbe** (*Abbé refractometry*), el refractómetro de prismas clásico.

### Cómo se mide bien
Los métodos oficiales del BOE (aceites, mantequilla y zumos) coinciden en lo esencial:

- **Longitud de onda fija.** El índice cambia con el color de la luz. Salvo que se diga otra cosa, se usa la **línea D del sodio**, de 589,3 nm, y se escribe n con la D y la temperatura: n²⁰D es el índice a 20 °C con esa luz. Se puede usar luz blanca si el equipo tiene **compensación cromática**.
- **Temperatura controlada.** Los prismas se calientan con líquido termostatado a ± 0,1 °C, y el método de zumos deja la muestra cerrada en un baño a 20 °C hasta que llega a esa temperatura.
- **Ajuste con agua.** El agua destilada debe dar 1,3330 a 20 °C; si no, se corrige la lectura.
- **Resolución.** Al menos las diezmilésimas (cuatro decimales), con la muestra limpia y sin agua.

### La temperatura cambia el índice
Al calentar un líquido, su índice **baja**. El método del BOE para aceites corrige con un factor F por grado, 0,00035 para referir a 20 °C:

> n a 20 °C = n leído + (temperatura de lectura − 20) × F

**Ejercicio resuelto 4.** Un aceite da 1,4652 leído a 24 °C. n a 20 °C = 1,4652 + 4 × 0,00035 = 1,4652 + 0,0014 = **1,4666**.

Ese factor es el de las grasas; cada sustancia tiene el suyo, y lo más seguro es medir a la temperatura de referencia. Fíjate: 4 °C mueven la tercera cifra decimal.

### Para qué sirve el índice de refracción
**Identidad y pureza de líquidos.** Cada líquido puro tiene su índice. El mismo BOE pide, para el etilenglicol que usa como reactivo, un índice a 20 °C entre 1,4274 y 1,4292. Una mezcla da otro índice: con un disolvente recuperado por destilación, el refractómetro ayuda a ver en minutos si lleva algo que no debe, según fije su especificación.

**Concentración.** En una disolución, el índice cambia con la cantidad disuelta. El método de zumos de uva del BOE convierte el índice en **grados Brix** con una tabla. En un laboratorio de API se hace con una recta de calibrado, como en espectroscopia.

**Ejercicio resuelto 5 (valores de ejemplo).** Patrones de una sal ficticia en agua, a 20 °C: 0 % da 1,3330; 10 % da 1,3475; 20 % da 1,3620. Es una recta: cada 1 % sube el índice (1,3620 − 1,3330) / 20 = 0,00145. Una muestra da 1,3548:

> % = (1,3548 − 1,3330) / 0,00145 = 0,0218 / 0,00145 = **15,0 %**

Ojo con el límite: el refractómetro mide el índice de **toda** la mezcla. No dice qué sustancia lo cambia; si hay dos disueltas, no las separa.

**Detector de HPLC.** La OMS cita el detector de **índice de refracción** entre los opcionales del HPLC (está en «HPLC a fondo: el equipo que da la riqueza y las impurezas de tu lote»).

### Luz polarizada: la valla de barrotes
La luz normal vibra en todas las direcciones a la vez, como una cuerda que agitas sin orden. Si la cuerda pasa por una valla de barrotes verticales, al otro lado solo sigue la vibración vertical. Un **polarizador** (*polarizer*) es esa valla para la luz: deja pasar la que vibra en un solo plano. Esa es la **luz polarizada** (*plane-polarized light*).

El manual de química de medicamentos de la FDA (*ORA Laboratory Manual*, volumen IV, sección 3) define la **polarimetría** como la medida de la **rotación óptica**: muchas sustancias farmacéuticas giran el plano de la luz polarizada que las atraviesa, y la luz sale con un ángulo medible respecto a la que entró. Las que lo giran a la derecha son dextrógiras (+); a la izquierda, levógiras (−). Las que tienen esa propiedad son **quirales**. Qué es un enantiómero y por qué (+) y (−) no tienen nada que ver con R y S está en «Isómeros y quiralidad a fondo»; aquí no se repite.

### El polarímetro
Piezas, en orden:

1. **Lámpara.** El método del BOE para mostos usa luz amarilla de vapor de sodio; otros admiten la verde de mercurio. El giro cambia con la longitud de onda, así que se usa la que diga el método.
2. **Polarizador**: deja la luz en un plano.
3. **Tubo de muestra** (*polarimeter tube*), de longitud exacta. Se mide en **decímetros** (dm): 1 dm son 10 cm. El método de mostos usa uno de 20 cm, es decir, 2 dm.
4. **Analizador** (*analyser*): otro polarizador que se gira hasta encontrar el plano de la luz que sale. El ángulo girado es la lectura α.

Cuidados que piden los métodos:

- **Comprobar el cero** antes de medir: sin muestra, el campo de visión debe verse uniforme y la lectura en cero (BOE, mostos).
- **Sin burbujas de aire** al llenar el tubo, y muestra **incolora y limpia**: la turbidez o un color fuerte quitan luz y estropean la lectura.
- **Temperatura.** Según la FDA, debe mantenerse dentro de **0,5 °C** de la indicada para que el cálculo valga.
- **Calibración.** La FDA describe una **placa de cuarzo** con lecturas trazables al NIST (el instituto de metrología de Estados Unidos), estabilizada a 25 °C, que se pone en el portatubos y se lee directamente.

### La rotación específica
El giro α crece con la concentración y con la longitud del tubo. Como en la ley de Lambert-Beer, se divide por las dos y sale la **rotación específica** (*specific rotation*), [α], con la temperatura y la longitud de onda escritas al lado:

> [α] = α / (l · c)  con l en dm y c en g/mL

El manual de la FDA la escribe [α] = 100 · α / (l · c), con c en gramos por 100 mL. Es la misma cuenta: 1 g/mL son 100 g/100 mL, y el 100 de arriba lo compensa.

**Ejercicio resuelto 6 (valores de ejemplo).** Se disuelven 0,500 g de un producto quiral ficticio hasta 25,0 mL. En un tubo de 2 dm a 20 °C el polarímetro marca +2,64°.

1. c = 0,500 g / 25,0 mL = 0,0200 g/mL
2. [α] = 2,64 / (2 × 0,0200) = **+66,0°**
3. Con la fórmula de la FDA: c = 2,00 g/100 mL; [α] = 100 × 2,64 / (2 × 2,00) = +66,0°. Igual.

**Ejercicio resuelto 7: qué lectura esperar.** Un intermedio tiene [α] = −40° (valor de ejemplo). Disolución de 0,050 g/mL en tubo de 1 dm: α = [α] · l · c = −40 × 1 × 0,050 = **−2,00°**. Si el equipo marca +2,00°, el signo cambiado es una señal de alarma: otro enantiómero, otra sustancia o un error de preparación.

### Rotación y pureza enantiomérica
Un racemato no gira la luz: los giros de los dos enantiómeros se anulan. Si se supone que cada enantiómero gira en proporción a su cantidad, el giro neto es proporcional a la **diferencia** entre los dos, es decir, al exceso enantiomérico (ee) de «Isómeros y quiralidad a fondo». De ahí sale la **pureza óptica** (*optical purity*):

> pureza óptica (%) = [α] medida / [α] del enantiómero puro × 100

En el caso ideal coincide con el ee.

**Ejercicio resuelto 8 (valores de ejemplo).** El enantiómero puro tiene [α] = +50,0°. El lote da +48,6°.

1. Pureza óptica = 48,6 / 50,0 × 100 = 97,2 %, que en el caso ideal es ee = 97,2 %
2. Enantiómero bueno = (100 + 97,2) / 2 = **98,6 %**; el otro, 1,4 %

Dos límites: supone un comportamiento ideal (cualquier impureza que gire la luz altera el número) y da una sola cifra para toda la muestra, sin separar los enantiómeros. Para cuantificar el no deseado se usa la cromatografía quiral.

### Turbidez: la luz que choca con partículas
El haz de una linterna se ve en una habitación con polvo porque las motas desvían luz hacia tus ojos; un líquido con partículas finas se ve turbio por lo mismo. La **turbidez** (*turbidity*) es esa pérdida de transparencia por partículas en suspensión.

Hay dos formas de medirla:

- **Turbidimetría** (*turbidimetry*): se mira la luz que sigue **en línea recta**. Cuantas más partículas, menos llega. Es parecido a medir una absorbancia.
- **Nefelometría** (*nephelometry*): se mira la luz **desviada** hacia un lado. El método oficial del BOE para aguas potables (Orden de 1 de julio de 1987) lo describe así: las partículas desvían parte de la luz; esa luz, recogida en una célula fotoeléctrica, da una corriente que crece con la turbidez. 

### La formacina, el patrón de turbidez
Para dar un número hace falta un patrón. El mismo método del BOE prepara la **formacina** (*formazin*):

1. Disolución A: 1,00 g de sulfato de hidracina en 100,0 mL de agua.
2. Disolución B: 10,00 g de hexametilentetramina en 100,0 mL de agua.
3. Se mezclan 5,0 mL de cada una en un matraz de 100 mL, se deja 48 horas a 20 a 25 °C (se forma un precipitado blanco), se enrasa y se agita.

Se le asignan **400 unidades nefelométricas de formacina (UNF)**. Se prepara cada mes; los patrones, cada semana, diluyendo con agua filtrada por 0,2 µm, mejor entre 0 y 40 UNF. El laboratorio maneja estos reactivos según su ficha de datos de seguridad.

**Ejercicio resuelto 9.** ¿Cuánta formacina de 400 UNF hace falta para 100 mL de patrón de 20 UNF? Con la regla de las diluciones (C₁ · V₁ = C₂ · V₂): V₁ = 20 × 100 / 400 = **5,0 mL**.

Por encima de 40 UNF, el BOE prefiere patrones más altos a diluir la muestra (el agua destilada puede disolver partículas). En el tubo no debe haber **burbujas** pegadas: desvían luz como una partícula.

La unidad tiene dos nombres: en España, **UNF**; en las normas de Estados Unidos (40 CFR 141), **NTU** (*nephelometric turbidity unit*).

### La turbidez del agua
El Real Decreto 3/2023, de agua de consumo, fija para la turbidez:

| Punto | Valor |
|---|---|
| Red de distribución y depósitos (valor paramétrico) | 4,0 UNF |
| Salida de la potabilizadora (ETAP) o depósito de cabecera | 0,8 UNF de referencia; 2 UNF, no apta |
| Salida de la filtración en la ETAP (control operacional) | 0,3 UNF o menos en el 95 % de las muestras del año |
| Red (no apta) | 6 UNF |

En Estados Unidos (40 CFR 141.173), el agua filtrada debe dar 0,3 NTU o menos en el 95 % de las medidas de cada mes y nunca más de 1 NTU. La norma ata esos límites a que la filtración y la desinfección quiten al menos el 99,9 % de los quistes de *Giardia*: la turbidez es un **chivato** rápido de que el filtro funciona. ICH Q7 (4.31) pide como mínimo agua potable para el proceso de un API; el resto, en «Agua farmacéutica a fondo: cómo se produce, se reparte y se vigila».

### Colorimetría: la escala platino-cobalto
**Colorimetría** (*colorimetry*) es medir un color comparándolo con patrones. La escala más usada en aguas es la **platino-cobalto** (*platinum-cobalt*). El método del BOE de 1987:

- **Patrón madre:** 1,246 g de cloroplatinato de potasio (500 mg de platino) y 1,000 g de cloruro de cobalto(II) hexahidrato, con ácido clorhídrico, hasta 1000 mL: 500 mg de platino por litro.
- **Patrones de trabajo:** de 1 a 70 mg Pt/L, recién preparados.
- **Medida:** tubos de Nessler de 50 mL; se mira **de arriba abajo** a través del líquido, contra un fondo blanco.
- **Si hay partículas**, se centrifuga antes: la turbidez falsea el color.
- **Si pasa de 70**, se diluye y se multiplica por el factor de dilución. Se redondea: de 1 a 50, a la unidad; de 51 a 100, de 5 en 5; de 101 a 250, de 10 en 10.

**Ejercicio resuelto 10.** Un agua muy coloreada se diluye 25 mL hasta 100 mL (factor 4) y da 30 mg Pt/L. Color = 30 × 4 = **120 mg Pt/L**, que ya cae en el tramo que se redondea de 10 en 10.

El RD 3/2023 da para el color del agua de consumo un valor de referencia de **15 mg/L Pt/Co**. La comparación a ojo depende de la persona y de la luz («Aspecto, color, solubilidad y claridad a fondo»); por eso se usan también **colorímetros** de filtro y el espectrofotómetro en el visible.

### Lo que haces tú
| Muestra para | Cuidados del operador |
|---|---|
| Índice de refracción | Envase cerrado (un disolvente volátil que se evapora cambia el índice); sin agua de lavado en el frasco; anota la temperatura si la hoja la pide |
| Rotación óptica | La cantidad pedida, envase cerrado, sin calentar: la rotación de un producto que racemiza cambia con el tiempo y el calor |
| Turbidez de agua | Abre el punto, deja correr lo que diga el procedimiento, llena sin hacer burbujas y lleva la muestra pronto |
| Color | Frasco limpio de vidrio o el que indique el procedimiento; nada de restos de otra muestra |

En planta manda siempre el procedimiento vigente (SOP): métodos, temperaturas, límites y envases son los de tu empresa, no los de estos ejemplos.
`,
  plant: `
Turno de mañana en una planta ficticia. Todos los códigos y valores son de ejemplo.

En el reactor **R-512** ha terminado la resolución que da el intermedio quiral inventado **QX-31**. La torta sale de la centrífuga **C-515** y, tras liberar la base, la disolución se concentra. La hoja pide una muestra de IPC para **rotación óptica**: especificación de [α] entre +48,0° y +51,0°. Llenas el frasco hasta arriba, lo cierras y lo llevas al laboratorio sin dejarlo junto a la camisa caliente. Resultado: +49,2°. Se sigue.

Mientras, el tolueno recuperado en la columna de destilación **D-520** va al tanque **T-522**. Antes de reutilizarlo, la hoja pide índice de refracción y agua. El laboratorio da n²⁰D fuera de su intervalo de aceptación: el tanque queda bloqueado. Se descubre que el condensador **E-521** perdía agua de refrigeración hacia el lado del producto. Mantenimiento cambia la junta y el tolueno se vuelve a destilar.

A media mañana, el analizador en línea de turbidez del agua de entrada **AT-601** sube de 0,2 a 1,5 UNF y salta la alarma. No es tu sistema, pero sí tu aviso: lo comunicas al responsable de servicios, que toma una muestra manual. Hay obras en la red municipal. Se pasa al depósito de reserva hasta que la lectura vuelve a su valor normal, y la incidencia queda registrada.
`,
  batchRecord: `
- **IPC de rotación óptica**: hora de toma, punto de muestreo, número de muestra, resultado ([α] con su signo), especificación, conforme o no, firma.
- **Disolvente recuperado**: tanque, lote de recuperación, resultados de índice de refracción y de agua, estado (aprobado o bloqueado), referencia a la orden de redestilar si la hay.
- **Agua de proceso**: lecturas de turbidez y conductividad si la hoja las pide en el arranque, con la hora.
- **Alarmas y avisos**: hora de la alarma del analizador, valor, a quién se avisó y qué se decidió (cambio de depósito, parada de la carga).
- **Desviaciones**: cualquier resultado fuera de intervalo, con su número de investigación.
`,
  terms: [
    { es: "Índice de refracción", en: "Refractive index", def: "Velocidad de la luz en el vacío dividida por la velocidad en la sustancia; el agua da 1,3330 a 20 °C con la línea D del sodio." },
    { es: "Ley de Snell", en: "Snell's law", def: "n₁ · sen θ₁ = n₂ · sen θ₂: dice cuánto se desvía la luz al pasar de un medio a otro." },
    { es: "Ángulo límite", en: "Critical angle", def: "Ángulo por encima del cual la luz que va hacia un medio de menor índice se refleja entera; sen θc = n₂ / n₁." },
    { es: "Refractómetro de Abbe", en: "Abbe refractometer", def: "Refractómetro de prismas termostatados que lee el índice de refracción de unas gotas de muestra." },
    { es: "Línea D del sodio", en: "Sodium D line", def: "Luz amarilla de 589,3 nm, la referencia habitual de índices de refracción y rotaciones ópticas." },
    { es: "Luz polarizada", en: "Plane-polarized light", def: "Luz que vibra en un solo plano tras pasar por un polarizador." },
    { es: "Polarímetro", en: "Polarimeter", def: "Equipo que mide cuánto gira una muestra el plano de la luz polarizada." },
    { es: "Rotación específica", en: "Specific rotation", def: "[α] = α / (l · c), con l en dm y c en g/mL; equivale a 100 · α / (l · c) con c en g/100 mL." },
    { es: "Pureza óptica", en: "Optical purity", def: "Rotación específica medida dividida por la del enantiómero puro, en tanto por ciento; en el caso ideal coincide con el exceso enantiomérico." },
    { es: "Turbidez", en: "Turbidity", def: "Pérdida de transparencia de un líquido por partículas en suspensión que desvían la luz." },
    { es: "Nefelometría", en: "Nephelometry", def: "Medida de la turbidez por la luz desviada hacia un lado por las partículas." },
    { es: "Formacina", en: "Formazin", def: "Suspensión patrón de turbidez preparada con sulfato de hidracina y hexametilentetramina; el BOE le asigna 400 UNF." },
    { es: "Unidad nefelométrica de formacina", en: "Formazin nephelometric unit (FNU) / NTU", def: "Unidad de turbidez referida a la formacina; en España UNF, en las normas de Estados Unidos NTU." },
    { es: "Escala platino-cobalto", en: "Platinum-cobalt colour scale", def: "Escala de color de aguas con patrones de cloroplatinato de potasio y cloruro de cobalto, en mg de platino por litro." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Un compañero propone medir el índice de refracción de un intermedio quiral para saber si ha bajado su exceso enantiomérico. ¿Qué le dices?",
      options: [
        "Que sí, porque el enantiómero no deseado tiene un índice mucho más alto",
        "Que sí, siempre que corrija la lectura a 20 °C con el factor de grasas",
        "Que no: los dos enantiómeros dan el mismo índice; hace falta otra técnica",
        "Que no: el refractómetro solo sirve para el agua y para los zumos",
      ],
      answer: 2,
      explain: "Fuera de un ambiente quiral, los dos enantiómeros tienen propiedades físicas idénticas salvo el sentido del giro de la luz polarizada; para eso están el polarímetro y la cromatografía quiral.",
    },
    {
      kind: "number",
      q: "Un aceite da un índice de 1,4688 leído a 22 °C. Con el factor del BOE para grasas, F = 0,00035 por °C, ¿cuál es su índice referido a 20 °C?",
      answer: 1.4695,
      tolerance: 0.0001,
      unit: "",
      explain: "n a 20 °C = n leído + (22 − 20) × 0,00035 = 1,4688 + 0,0007 = 1,4695. El índice baja al calentar, así que al llevarlo a 20 °C sube.",
    },
    {
      kind: "choice",
      q: "El laboratorio comprueba el refractómetro con agua destilada a 20 °C y lee 1,3338. ¿Qué indica?",
      options: [
        "Que el agua tiene sales, porque el agua pura no refracta la luz",
        "Que no da el 1,3330 esperado: hay que corregir o ajustar antes de medir",
        "Que todo está bien, porque la diferencia está en la cuarta decimal",
        "Que el equipo mide en otra longitud de onda y se debe usar luz blanca",
      ],
      answer: 1,
      explain: "El método oficial pide que el agua destilada dé 1,3330 a 20 °C y, si no, corregir la lectura; un refractómetro de precisión aprecia las diezmilésimas, así que esa diferencia cuenta.",
    },
    {
      kind: "number",
      q: "Se disuelven 0,375 g de un producto quiral ficticio hasta 25,0 mL (0,0150 g/mL). En un tubo de 2 dm el polarímetro marca −1,86°. ¿Cuál es la rotación específica? Da solo el número de grados, sin signo (el signo ya sabes que es negativo).",
      answer: 62,
      tolerance: 0.01,
      unit: "°",
      explain: "[α] = α / (l · c) = 1,86 / (2 × 0,0150) = 62, con signo negativo: −62°. Con la fórmula de la FDA: 100 × 1,86 / (2 × 1,50) = 62.",
    },
    {
      kind: "number",
      q: "Un intermedio tiene [α] = −40° (valor de ejemplo). ¿Cuántos grados debería girar la luz con una disolución de 0,050 g/mL en un tubo de 1 dm? Da el número sin signo (el giro será hacia la izquierda).",
      answer: 2,
      tolerance: 0.01,
      unit: "°",
      explain: "α = [α] · l · c = 40 × 1 × 0,050 = 2, hacia la izquierda: −2°. Una lectura de +2° sería una señal de alarma.",
    },
    {
      kind: "number",
      q: "El enantiómero puro de un producto tiene [α] = +50,0° y un lote da +47,0°. Suponiendo comportamiento ideal, ¿qué porcentaje hay del enantiómero no deseado?",
      answer: 3,
      tolerance: 0.02,
      unit: "%",
      explain: "Pureza óptica = 47,0 / 50,0 × 100 = 94 %, igual al ee en el caso ideal. Enantiómero no deseado = (100 − 94) / 2 = 3 %.",
    },
    {
      kind: "choice",
      q: "Llevas al laboratorio una muestra para rotación óptica y el analista ve que la disolución sale turbia. ¿Qué es lo más probable que pase?",
      options: [
        "Nada: la turbidez solo afecta al color, no al giro de la luz",
        "El giro sale mayor, porque las partículas también son quirales",
        "El polarímetro corrige la turbidez solo con la placa de cuarzo",
        "La lectura no es fiable: la muestra debe ser limpia y sin burbujas",
      ],
      answer: 3,
      explain: "Los métodos piden un líquido incoloro y limpio y sin burbujas; las partículas desvían y quitan luz y estropean la lectura del ángulo.",
    },
    {
      kind: "number",
      q: "La formacina madre tiene 400 UNF. ¿Cuántos mL hacen falta para preparar 250 mL de un patrón de 4 UNF?",
      answer: 2.5,
      tolerance: 0.01,
      unit: "mL",
      explain: "C₁ · V₁ = C₂ · V₂: V₁ = 4 × 250 / 400 = 2,5 mL, enrasados con agua filtrada por 0,2 µm.",
    },
    {
      kind: "choice",
      q: "Una muestra de agua de la red interior de la planta da 5,1 UNF. Según el RD 3/2023, ¿cómo queda frente a los valores de la red de distribución?",
      options: [
        "Por encima del valor paramétrico de 4,0 UNF, aunque bajo el de no aptitud de 6",
        "Dentro del valor paramétrico, que en la red de distribución es de 6 UNF",
        "No apta, porque en red no puede superar en ningún caso 0,8 UNF",
        "Sin límite aplicable, porque la turbidez solo se vigila en la ETAP",
      ],
      answer: 0,
      explain: "El RD 3/2023 fija 4,0 UNF como valor paramétrico en red y 6 UNF como valor de no aptitud en red; los 0,8 UNF son la referencia a la salida de la ETAP. Se avisa según el procedimiento.",
    },
    {
      kind: "number",
      q: "Un agua coloreada se diluye 25 mL hasta 100 mL y, comparada con la escala platino-cobalto, da 18 mg Pt/L. ¿Cuál es el color de la muestra original, en mg Pt/L?",
      answer: 72,
      tolerance: 0.01,
      unit: "mg Pt/L",
      explain: "Factor de dilución 100 / 25 = 4; 18 × 4 = 72 mg Pt/L, que en el tramo de 51 a 100 se expresaría redondeando de 5 en 5 (70).",
    },
  ],
};
