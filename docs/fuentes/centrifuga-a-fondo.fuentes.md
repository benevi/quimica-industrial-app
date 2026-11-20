# Fuentes de la lección «La centrífuga a fondo» (centrifuga-a-fondo)

Aviso sobre el método: en esta sesión solo se podían abrir páginas de insst.es y boe.es. El resto de webs (Pharmaceutical Technology, fabricantes, Wikipedia, BIPM, EUR-Lex) no eran accesibles, así que esas afirmaciones se comprobaron solo con el **fragmento que devuelve el buscador**, no leyendo la página entera. Conviene releerlas cuando haya acceso.

| Afirmación o cifra de la lección | Fuente | Cómo se comprobó |
|---|---|---|
| Gravedad normalizada: 9,80665 m/s² (980,665 cm/s²) | BIPM, 3.ª CGPM (1901), resolución 2: https://www.bipm.org/committees/cg/cgpm/3-1901/resolution-2 ; https://en.wikipedia.org/wiki/Standard_gravity | Fragmento de buscador (valor exacto confirmado por varias fuentes) |
| Aceleración en giro = ω² × r; ω = 2π × rpm / 60 | Física básica; https://mse-sas.com/en/rcf-calculator/ | Fragmento de buscador y deducción propia |
| (2π/60)² = 0,010966; 0,010966 / 980,665 = 0,00001118; RCF = 1,118 × 10⁻⁵ × r (cm) × rpm² | Cálculo; fórmula también en https://mse-sas.com/en/rcf-calculator/ | Recalculado con node (constante = 1,11824 × 10⁻⁵) |
| Doblar rpm multiplica por 4; triplicar, por 9; doblar el radio, por 2 | Cálculo (rpm al cuadrado, radio lineal) | Recalculado |
| Cesta 1 m (r = 50 cm): 400 rpm = 89 g; 800 rpm = 358 g; 1200 rpm = 805 g; 1000 rpm = 559 g | Cálculo | Recalculado con node: 89,44; 357,76; 804,96; 559,00 |
| Inverso: 500 g con r = 50 cm son 946 rpm (rpm² = 894 454) | Cálculo | Recalculado: 945,76 |
| Borde de la cesta de 1 m a 1200 rpm: 20 vueltas/s, 62,8 m/s, unos 226 km/h | Cálculo (π × 1 m × 1200 / 60) | Recalculado: 62,83 m/s; 226,2 km/h |
| 2 kg de más a 805 g tiran como 1610 kg, 20 veces por segundo | Cálculo (2 × 805) | Recalculado: 15 791 N = 1610 kgf |
| Quiz: r = 60 cm, 900 rpm = 543 g; r = 40 cm, 600 g = 1158 rpm (rpm² = 1 341 682); 140 g × 9 = 1260 g; 3 kg × 800 = 2400 kg | Cálculo | Recalculado: 543,35; 1158,31; 1 341 681,6 |
| Descarga superior: a mano con pala o izando el saco; el contacto del operador con el producto no se evita salvo con contención; opción económica | Comi Condor (ficha de centrífuga de descarga superior): https://www.comicondor.com/en/vertical-centrifuges/axis-top-discharge-centrifuge-alfas-iv ; De Dietrich: https://www.dedietrich.com/en/equipment/products/top-discharge-centrifuge | Fragmento de buscador |
| Descarga superior con saco: no deja capa residual | De Dietrich (misma ficha: «lossless filter cake discharge») | Fragmento de buscador |
| Descarga inferior: un rascador corta la torta y cae por una tolva del fondo a contenedor, secadero, etc. | Comi Condor: https://www.comicondor.com/en/vertical-centrifuges/axis-bottom-discharge-centrifuge-tms-iv-pharma ; https://en.wikipedia.org/wiki/Peeler_centrifuge | Fragmento de buscador |
| El rascador vertical trabaja con la cesta a velocidad reducida | Patente US 6177021 («clearing speed»); Wikipedia, Peeler centrifuge (la vertical debe decelerar) | Fragmento de buscador |
| Rasqueta horizontal: la cuchilla rasca la torta con la cesta girando y la manda a un conducto de descarga; ciclo automático y cerrado | Pharmaceutical Technology, «Centrifuges Used in Pharmaceutical Manufacturing: A Primer»: https://www.pharmtech.com/view/centrifuges-used-pharmaceutical-manufacturing-primer ; Wikipedia, Peeler centrifuge | Fragmento de buscador |
| Tela invertida: la tela se vuelve del revés con la cesta girando, la torta sale despedida a la carcasa, no queda talón, apta para tortas finas | Heinkel en Chemical Processing: https://www.chemicalprocessing.com/directory/product/11337340/ ; patente US 5169525 | Fragmento de buscador |
| Talón: la cuchilla se detiene antes de tocar la tela para no dañarla y queda una capa fina | Patente US 6063298 / US 6318562: https://patents.google.com/patent/US6063298 | Fragmento de buscador |
| El talón se compacta con finos hasta hacerse impermeable y empeora la filtración; se retira con gas, con un gran caudal de líquido o por contralavado | Andritz, peeler centrifuge HZ: https://www.andritz.com/products-en/separation/filter-centrifuges/krauss-maffei-hz-peeler-centrifuge | Fragmento de buscador |
| Orden del ciclo: carga, aceleración, lavado, escurrido, frenado, descarga; la alimentación se reparte para que la torta quede pareja y no rebose por el borde | Wikipedia, Peeler centrifuge | Fragmento de buscador |
| Se carga a baja velocidad para evitar salpicaduras | Patente US 5713826 (vertical basket centrifuge) | Fragmento de buscador |
| Torta desigual desequilibra la cesta y produce vibración (como una lavadora mal cargada) | Patentes US 6063292 / US 6328897 | Fragmento de buscador |
| El sensor de vibración corta la alimentación o la corriente; la carga debe redistribuirse antes de volver a acelerar | Patentes US 5307567 y US 6328897 | Fragmento de buscador |
| Desgaste de rodamientos y amortiguadores como causa de vibración | https://dolphincentrifuge.com/disc-stack-centrifuge-mechanical-issues-fixes/ (centrífugas de discos; principio general) | Fragmento de buscador |
| Tela rota y torta desprendida como causas de vibración; filtrado turbio como aviso de tela rota | Sin fuente específica. Razonamiento físico: cualquier reparto desigual de masa desequilibra (ver cálculo de los 1610 kg) | No verificado con fuente; ver lista final |
| Lavado por desplazamiento: el disolvente atraviesa la torta sin moverla; las grietas hacen que se cuele y queden zonas sin lavar | Ottoboni y otros, Org. Process Res. Dev. (acceso abierto): https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8787817/ ; https://manufacturingchemist.com/how-to-remove-impurities-without-wasting-solvent-using | Fragmento de buscador |
| Lavado por resuspensión: se mezcla con disolvente limpio y se vuelve a filtrar; requiere agitador; conviene si hace falta tiempo de contacto, la torta está muy agrietada o el desplazamiento no funciona | Manufacturing Chemist (enlace anterior); guía de filtración y secado: https://www.slideshare.net/slideshow/filtration-and-drying-equipment-32187781/32187781 | Fragmento de buscador |
| Inertizar con nitrógeno empobrece el oxígeno hasta que la inflamación es imposible; límite con margen por debajo de la concentración límite de oxígeno | INSST, Guía técnica de atmósferas explosivas (2021), apartado «Trabajar en atmósferas inertes» | Leído en el documento |
| El control por presión no asegura la inertización porque no distingue entre oxígeno, vapores y gas inerte | INSST, misma guía, mismo apartado | Leído en el documento |
| Riesgo de asfixia en atmósferas inertes | INSST, misma guía, nota 35 | Leído en el documento |
| Analizador de oxígeno con enclavamiento en centrífugas | Mettler Toledo: https://www.mt.com/be/en/home/library/applications/process-analytics/AN_Enhanced.html ; «Inerting of centrifuges for safe operation», Process Safety Progress (resumen) | Fragmento de buscador |
| La electricidad estática se genera cuando un líquido fluye en contacto con otros materiales | INSST, NTP 567 y NTP 225: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/16-serie-ntp-numeros-541-a-575-ano-2001/ntp-567-proteccion-frente-a-cargas-electrostaticas. | Fragmento de buscador |
| La protección principal contra descargas electrostáticas es la puesta a tierra y la conexión de todas las superficies conductoras | INSST, Guía técnica de atmósferas explosivas, apéndice sobre electricidad estática | Leído en el documento |
| Las descargas electrostáticas cuentan como foco de ignición a evaluar | Real Decreto 681/2003, art. 4: https://www.boe.es/buscar/act.php?id=BOE-A-2003-12099 | Leído en la página |
| Tapa: el enclavamiento impide arrancar con el resguardo abierto y el bloqueo lo mantiene cerrado hasta que cesa el riesgo | Real Decreto 1644/2008, anexo I, punto 1.4.2.2: https://www.boe.es/buscar/act.php?id=BOE-A-2008-16387 | Leído en la página |
| Triángulo del fuego; al abrir entra aire y hay que volver a inertizar | Lección existente `carga-e-inertizacion` del repositorio | Coherencia con el contenido ya publicado |
| Datos del ejemplo de planta (C-305, R-204, VX-22, 1,8 % de O₂, tiempos, 2 × 40 L) | Ficticios, inventados para el ejemplo | No aplica |

## Lo que quería incluir y dejé fuera por no poder verificarlo

- Rangos típicos de fuerza G de cada tipo de centrífuga industrial (vertical, rasqueta, tela invertida): no encontré cifras en fuente abierta legible.
- Límite concreto de oxígeno para centrífugas (un fabricante cita una banda de 3 a 5 % en volumen, pero solo lo vi en un fragmento): la lección remite al límite del procedimiento.
- Nivel de llenado de la cesta (Wikipedia cita 75-80 % de la altura del reborde en las de rasqueta): solo fragmento y sin fuente primaria, no se incluyó la cifra.
- Valores de alarma y disparo de vibración (mm/s) y la norma que los fija: son normas de pago.
- Norma europea de seguridad de centrífugas (EN 12547): de pago, no citada.
- Espesor típico del talón en milímetros.
- Velocidad de descarga del rascador en rpm.
- Procedimiento concreto para redistribuir una torta desequilibrada (por ejemplo, humedecerla girando despacio): no verificado, se remite al procedimiento.
- Niveles de contención o de exposición (bandas de exposición) por tipo de centrífuga.
- Uso de telas o sacos antiestáticos.

## Dos puntos que sí están en la lección con apoyo débil

- «Tela rota» y «torta agrietada o desprendida» como causas de vibración, y el filtrado turbio como señal de tela rota: el encargo los pedía, pero no encontré fuente que los relacione directamente con la vibración. Se apoyan en el principio, sí demostrado por cálculo, de que cualquier reparto desigual de masa desequilibra la cesta. Revisar o quitar si se quiere un criterio estricto.
- El desgaste de rodamientos y amortiguadores procede de una fuente sobre otro tipo de centrífuga (de discos).
