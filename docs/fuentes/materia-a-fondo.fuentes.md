# Fuentes y comprobaciones: lección `materia-a-fondo`

Niveles de comprobación:

- **Leído**: descargué el documento oficial en esta sesión y leí el pasaje (copias en `src_materia/dl/`).
- **App**: dato que ya está en una lección o en una ficha de datos de seguridad (FDS) ficticia de la app, verificada en su momento (`src/content/fds.ts`, lecciones citadas).
- **Libro de texto**: conocimiento de química general de libro de texto universal; no se cita ninguna fuente que no haya leído. Donde hay número, está comprobado por cálculo.
- **Recalculado**: cálculo propio con Python (`src_materia/calc.py`), redondeado igual que en el texto.
- **Valor de ejemplo declarado**: cifra inventada para la cuenta y dicha así en el texto.

## Tabla de afirmaciones

| Afirmación o cifra | Fuente | Cómo se comprobó |
|---|---|---|
| Materia, sustancia, propiedades físicas y químicas, cambio físico y químico | Libro de texto | Conocimiento de libro de texto |
| Diluir ácido sulfúrico desprende mucho calor; se trata como dilución | Lección `disoluciones` de la app («al diluir se desprende mucho calor»); libro de texto | App |
| El metanol hierve a 65 °C, funde a −98 °C, presión de vapor 12,9 kPa (129 mbar) a 20 °C, es inflamable | FDS ficticia de metanol, `src/content/fds.ts` | App |
| Tolueno 0,87 kg/L, agua 1,00 kg/L; tolueno hierve a 111 °C | Lección `densidad` (nivel 0) y FDS de tolueno de la app | App |
| Nitrógeno hierve a −196 °C | FDS de nitrógeno de la app | App |
| El hidruro de sodio reacciona con violencia con el agua | Lección `atomos-y-tabla-periodica` de la app | App |
| La sección 9 de la FDS recoge las propiedades físicas y químicas | `src/content/fds.ts` (estructura de las 16 secciones) | App |
| Sosa al 50 % cristaliza hacia 12–13 °C | FDS ficticia de hidróxido de sodio 50 % de la app | App |
| Composición del aire: nitrógeno, oxígeno, argón | Lección «Inertización a fondo» de la app | App |
| Modelo de partículas de sólido, líquido y gas; presión de un gas como choques con las paredes | Libro de texto | Conocimiento de libro de texto |
| La temperatura mide la energía media de agitación de las partículas; cero absoluto | Libro de texto; el RD 2032/2009 liga el kelvin a la energía térmica kT mediante la constante de Boltzmann | Libro de texto + Leído |
| El kelvin es la unidad SI de temperatura termodinámica y se define fijando la constante de Boltzmann, k = 1,380 649 × 10⁻²³ J/K | RD 2032/2009, anexo, cap. I, 2.5 (redacción del RD 493/2020): https://www.boe.es/buscar/act.php?id=BOE-A-2010-927 | Leído |
| t = T − T₀, con T₀ = 273,15 K; el grado Celsius es en magnitud igual al kelvin, y una diferencia de temperaturas puede expresarse en las dos | RD 2032/2009, anexo, cap. II, tabla 3, nota (e) | Leído |
| 25 °C = 298,15 K; −10 °C = 263,15 K; 300 K = 26,85 °C; 37 °C = 310,15 K; de 20 a 65 °C son 45 K | Cálculo con T = t + 273,15 | Recalculado |
| Nombres de los seis cambios de estado; hielo seco sublima; escarcha es deposición; liofilización como sublimación del hielo a vacío | Libro de texto | Conocimiento de libro de texto |
| Hielo en una trampa fría de una línea de vacío | Libro de texto (deposición del vapor de agua sobre una superficie muy fría); redactado como posibilidad, sin cifras | Deducido |
| Meseta durante fusión y ebullición; calor latente | Libro de texto; lección «Vapor y calderas a fondo» de la app | App |
| Agua: funde a 0 °C y hierve a 100 °C a presión atmosférica | IAPWS-IF97: a 1013,25 mbar da 99,97 °C | Recalculado (implementación que reproduce los valores de prueba oficiales Ts(0,1 MPa) = 372,7559 K y ps(300 K) = 0,00353659 MPa; ya usada en «El secado a fondo») |
| Presión de vapor del agua: 20 °C 23 mbar; 40 °C 74; 60 °C 200; 80 °C 474; 100 °C 1013 | IAPWS-IF97 (23,4; 73,8; 199,5; 474,1; 1014,2 mbar). Coincide con «Bombas a fondo» (2,34 kPa; 47,4 kPa; 101,3 kPa) | Recalculado + App. En 100 °C se escribe 1013 mbar, la presión atmosférica, como la lección de bombas |
| Entre 20 y 100 °C la presión de vapor se multiplica por más de cuarenta | 1013 / 23,4 = 43 | Recalculado |
| Agua hierve a 60 °C a 200 mbar, 46 °C a 100 mbar, 33 °C a 50 mbar | IAPWS-IF97 (60,06; 45,81; 32,88 °C); los mismos valores que «El secado a fondo» | Recalculado |
| Punto de ebullición cuando la presión de vapor iguala a la de encima; en la montaña se hierve por debajo de 100 °C; vacío para destilar y secar | Libro de texto; lecciones `la-materia`, «Bombas a fondo», «El secado a fondo» | App + libro de texto |
| El metanol tiene a 20 °C una presión de vapor más de cinco veces la del agua | 129 / 23,4 = 5,5 | Recalculado |
| Al destilar metanol y agua el vapor sale más rico en metanol | Libro de texto (el componente más volátil se enriquece en el vapor) | Conocimiento de libro de texto |
| Cavitación cuando la presión baja a la presión de vapor | «Bombas a fondo» de la app | App |
| Vapores inflamables de disolventes volátiles; polvo combustible en el aire | «Atmósferas explosivas a fondo» de la app (remisión, sin datos nuevos) | App |
| Elementos, compuestos, mezclas homogéneas y heterogéneas; suspensión, emulsión, espuma | Libro de texto; lecciones `centrifuga` (suspensión), `extraccion-liquido-liquido` (emulsión) y `destilacion` (espuma) de la app | App + libro de texto |
| Tabla de métodos de separación y la propiedad en la que se basa cada uno | Libro de texto; equipos según las lecciones del nivel 12 de la app | App + libro de texto |
| Definición de impureza: «Any component present in the intermediate or API that is not the desired entity» | ICH Q7, glosario: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf | Leído |
| Definición de aguas madres: «The residual liquid which remains after the crystallization or isolation processes. A mother liquor may contain unreacted materials, intermediates, levels of the API and/or impurities» | ICH Q7, glosario | Leído |
| Comparar rendimientos reales con esperados e investigar desviaciones de rendimiento en etapas críticas | ICH Q7, apartado 8.14 | Leído |
| Por qué la pureza nunca es del 100 % (material sin reaccionar, subproductos, aguas madres retenidas, disolvente residual, degradación) | ICH Q7 (definición de aguas madres) y lección «Impurezas en el API» de la app | Leído + App |
| Fórmula del tanto por ciento en masa | Libro de texto | Conocimiento de libro de texto |
| 250 kg al 0,08 %: 0,2 kg = 200 g | Valor de ejemplo declarado | Recalculado |
| 48,5 kg en 50,0 kg: 97,0 % | Valor de ejemplo declarado | Recalculado |
| Torta de 180 kg con 22 %: 140,4 kg secos y 39,6 kg de líquido | Valor de ejemplo declarado | Recalculado |
| Conservación de la masa en cambios físicos y químicos | Libro de texto | Conocimiento de libro de texto |
| HCl + NaOH: 36,46 + 40,00 = 76,46 g; NaCl + H₂O: 58,44 + 18,02 = 76,46 g | Masas molares de la lección `el-mol` de la app; con los valores estándar de la IUPAC (H 1,008; O 15,999; Na 22,990; Cl 35,45), no leídos en esta sesión, salen 76,455 g a cada lado | Recalculado |
| Disolver 100 kg en 600 kg, cristalizan 85 kg: 615 kg de aguas madres con 15 kg disueltos | Valor de ejemplo declarado | Recalculado |
| Secar 150 kg a 118,5 kg: 31,5 kg evaporados | Valor de ejemplo declarado | Recalculado |
| Ejemplo de planta: 120 + 720 = 840 kg; torta 125 kg al 18 % = 102,5 kg secos y 22,5 kg de metanol; 840 − 125 = 715 kg de aguas madres; 125 − 103,0 = 22,0 kg perdidos | Valores de ejemplo, equipos y producto ficticios (R-205, E-205, C-410, SD-512, RX-330) | Recalculado |
| Quiz: 310,15 K; 200 g; 97,2 %; 180,4 kg; 532 kg; 31,2 kg | Valores de ejemplo | Recalculado |
| Quiz: agua a 200 mbar hierve a unos 60 °C | IAPWS-IF97 | Recalculado |

## Lo que dejé fuera por no poder verificarlo

- Presión de vapor del tolueno, la acetona, el heptano, el acetato de etilo y el diclorometano, y puntos de ebullición de los que no tienen FDS en la app: no los leí en ninguna fuente accesible. En la tabla de volatilidad, la presión de vapor del tolueno figura como «no la damos».
- Temperatura de ebullición del metanol a vacío (por ejemplo, a 100 mbar): sin fuente leída; en el ejemplo de planta solo se dice que la temperatura de producto queda «muy por debajo» de la camisa.
- Puntos de fusión de principios activos concretos y criterios del laboratorio para el ensayo de punto de fusión.
- Cifras de calor latente: se remiten a «Vapor y calderas a fondo» sin repetirlas.
- Si la liofilización es más o menos habitual en plantas de principios activos de síntesis química: no verificado, solo se nombra.
- Umbrales de impurezas de ICH Q3A: están en «Impurezas en el API» y no se repiten.
- La diferencia entre «pureza» y «riqueza» (*assay*) según los métodos de análisis: se deja para las lecciones de laboratorio.
