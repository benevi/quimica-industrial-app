# Fuentes de la lección `lazos-a-fondo`

## Aviso importante sobre el acceso a las fuentes

- **control.com (libro de Kuphaldt, «Lessons in Industrial Instrumentation») no se pudo leer.** curl recibe un 403 con una página de comprobación de Cloudflare («Just a moment...»), también con cabeceras de navegador completas. La herramienta de lectura web tampoco llega (host fuera de la red de la sesión). ibiblio.org, Wikipedia y LibreTexts dan error de red.
- Por eso **la teoría de control de esta lección no está leída en ninguna fuente abierta en esta sesión**. Es conocimiento de libro de texto, redactado de memoria y comprobado de dos maneras: (a) todas las cuentas recalculadas con python, y los comportamientos (error permanente, saturación de la integral, oscilación por ganancia alta, cascada, válvula pegada) reproducidos en simulaciones propias; (b) fragmentos del buscador web donde los hubo. Conviene que alguien con acceso al libro contraste las definiciones marcadas como «libro de texto, sin leer».
- Sí se leyeron enteros los pasajes citados de **ICH Q7** y del **Anexo 11** (PDF descargados y pasados a texto).

Cómo leer la columna «Comprobación»:

- **Leído en el PDF**: documento oficial descargado con curl y pasaje leído.
- **Fragmento de buscador**: solo se vio el extracto que devuelve el buscador. No se usa para cifras.
- **Libro de texto, sin leer**: conocimiento general de control de procesos; no se pudo abrir la fuente.
- **Recalculado** / **Simulado**: cuenta o simulación en python (`src_lazos/calc.py`, `src_lazos/sim2.py`).
- **Valor de ejemplo declarado**: número inventado para el ejemplo y dicho así en el texto.

URL:

- ICH Q7: `https://database.ich.org/sites/default/files/Q7%20Guideline.pdf`
- EudraLex vol. 4, Anexo 11: `https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf`
- Kuphaldt, ejemplo del reactor: `https://control.com/textbook/introduction-to-industrial-instrumentation/example-chemical-reactor-temperature-control/` (solo fragmento)
- Kuphaldt, modo de fallo de válvulas: `https://control.com/textbook/control-valves/valve-failure-mode/` (solo fragmento)
- Control Engineering, «PID spotlight, part 18: How to spot sticking control valves»: `https://www.controleng.com/pid-spotlight-part-18-how-to-spot-sticking-control-valves/` (solo fragmento)
- ISA Interchange, «What is the definition of PID bumpless transfer»: `https://blog.isa.org/what-is-the-definition-of-pid-bumpless-transfer` (solo fragmento)
- Diapositivas del curso de Seborg (UCSB), capítulo 8: `https://sites.chemengr.ucsb.edu/~ceweb/faculty/seborg/teaching/SEM_2_slides/Chapter_8.pdf` (solo fragmento)

## Tabla de afirmaciones

| Afirmación de la lección | Fuente | Comprobación |
|---|---|---|
| Lazo cerrado: medir, comparar, actuar; PV, SP, OP en % | Lección existente `lazos-de-control` del repo; libro de texto | Libro de texto, sin leer |
| Error = SP − PV; ejemplos 70 − 64 = 6 y 70 − 73 = −3 | Definición dada en el encargo y en la lección existente; cálculo | Recalculado |
| El controlador trabaja en % del rango; 10 °C sobre 0–200 °C = 5 % | Libro de texto; cálculo | Libro de texto, sin leer; recalculado |
| Transmisor de 0 a 100 °C | Valor de ejemplo declarado | — |
| Acción inversa: la salida baja cuando la PV sube; acción directa: la salida sube cuando la PV sube | Fragmentos de varias fuentes (control.com, eCampusOntario) que la definen igual | Fragmento de buscador |
| Calentar con vapor y válvula que abre con la señal pide acción inversa; una válvula de refrigerante pediría acción directa | Kuphaldt, ejemplo del reactor (control.com) | Fragmento de buscador; además razonado en el texto |
| Una válvula neumática que abre con aire cierra al perder el aire, y al revés | Kuphaldt, «valve failure mode» (control.com) | Fragmento de buscador |
| «Lo habitual» es que la de vapor cierre al fallar y la de refrigeración abra; lo decide el diseño de seguridad | Fragmento (Control Global) y práctica general | Fragmento de buscador; redactado como costumbre, no como norma |
| En pantalla el 100 % puede significar válvula abierta o señal máxima, según el sistema | Práctica general de sistemas de control | Libro de texto, sin leer |
| Control todo o nada con histéresis; oscila siempre | Libro de texto | Libro de texto, sin leer |
| Termostato: consigna 21 °C, margen ±0,5 °C, enciende a 20,5 y apaga a 21,5 | Valor de ejemplo declarado; cálculo | Recalculado |
| Salida = ganancia × error + sesgo | Libro de texto (forma habitual del control proporcional) | Libro de texto, sin leer |
| Ganancia 2 y sesgo 50 %: 62 %, 30 % y 110 % (limitada a 100 %) | Valores de ejemplo declarados; cálculo | Recalculado |
| BP = 100 / ganancia | Fragmento del buscador («proportional band is the inverse of the gain», PB = 100 / Gain) | Fragmento de buscador; fórmula de libro de texto |
| BP de 50 %, 200 % y 25 % para ganancias 2, 0,5 y 4 | Cálculo | Recalculado |
| Error permanente: tanque «10 + salida» que pasa a «salida»; ganancia 1 se queda a 55 °C (error 5); ganancia 4 a 58 °C (error 2) | Valores de ejemplo declarados; cálculo algebraico y simulación | Recalculado y simulado (55,0 y 58,0) |
| Subir mucho la ganancia hace oscilar el lazo | Libro de texto; simulación propia con tiempo muerto (ganancia 20 oscila de forma sostenida, 2 a 12 no) | Simulado |
| La integral suma el error hasta anularlo | Libro de texto; simulación PI (acaba en 60,00) | Simulado |
| Tiempo integral en minutos por repetición: tiempo en que la integral repite el aporte proporcional | Libro de texto | Libro de texto, sin leer |
| Ganancia 2, Ti 10 min, error 5 %: P = 10 %; integral 1 %/min; 4 % a los 4 min | Valores de ejemplo declarados; cálculo | Recalculado |
| 10 min por repetición = 0,1 repeticiones por minuto | Cálculo | Recalculado |
| Saturación de la integral: sigue acumulando con la salida saturada | Fragmento (diapositivas de Seborg: acumulación del término integral con el controlador saturado) | Fragmento de buscador; libro de texto |
| Error del 20 % durante 30 min acumula 120 % | Cálculo | Recalculado |
| Rebasamiento de unos 2 °C con protección y más de 9 °C sin ella | Simulación propia (72,4 y 79,4 °C con consigna de 70 °C; proceso de ejemplo de primer orden con tiempo muerto) | Simulado. Es un ejemplo, no un dato de planta |
| Derivativa: aporte = ganancia × Td × velocidad; 2 × 1 × 3 = 6 % | Libro de texto; valores de ejemplo; cálculo | Recalculado |
| Ruido: 0,5 % por segundo = 30 %/min; respuesta de 60 % | Cálculo | Recalculado |
| La derivativa se usa poco en caudal y presión y sí en temperatura | Libro de texto | Libro de texto, sin leer |
| Fórmula del PID en forma ideal y aviso de variantes por fabricante | Libro de texto | Libro de texto, sin leer |
| Constante de tiempo: 63 % del cambio; más del 99 % tras cinco | Cálculo: 1 − e⁻¹ = 0,632; 1 − e⁻⁵ = 0,993 | Recalculado |
| Tiempo muerto, rebasamiento, oscilación, tiempo de establecimiento | Libro de texto | Libro de texto, sin leer |
| Constante de tiempo del reactor: 2000 × 2000 / (300 × 12) = 1111 s, unos 19 min | Datos de ejemplo de la lección `reactor-a-fondo` (U = 300, A = 12; 2000 kg y 2,0 kJ/(kg·K) de su test); cálculo (18,5 min) | Recalculado |
| Control de cambios: sistema formal para cambios que afecten a producción y control | ICH Q7, 13.10 a 13.12 | Leído en el PDF |
| Cambios en sistemas informatizados: autorizados, documentados y probados | ICH Q7, 5.47 | Leído en el PDF |
| Cambios de configuración solo de forma controlada y según procedimiento | EudraLex vol. 4, Anexo 11, apartado 10 | Leído en el PDF |
| El sistema «suele guardar» registro de quién cambió qué y cuándo | ICH Q7, 5.43; Anexo 11, apartados 9 y 12.4 (lo piden para datos GMP y según evaluación de riesgos; por eso se dice «suele») | Leído en el PDF |
| En manual el operador fija la salida; en automático, la consigna | Lección existente del repo; libro de texto | Libro de texto, sin leer |
| Salida del 30 al 45 %: 240 a 360 kg/h con válvula de 800 kg/h y caudal proporcional | Valores de ejemplo declarados; cálculo | Recalculado |
| Transferencia sin salto y seguimiento de la consigna (este último es opción de configuración) | ISA Interchange | Fragmento de buscador; libro de texto |
| Cascada: el maestro fija la consigna del esclavo; el esclavo corrige antes las perturbaciones del servicio | Lección existente del repo; libro de texto | Libro de texto, sin leer; simulado |
| Escala −10 a 130 °C: 50 % son 60 °C y 75 % son 95 °C | Valores de ejemplo declarados; cálculo | Recalculado |
| Desviación de unos 3 °C con un lazo y menos de 0,5 °C en cascada | Simulación propia (3,1 y 0,41 °C) | Simulado. Es un ejemplo |
| Modos del esclavo: cascada, automático local, manual | Lección existente del repo; libro de texto | Libro de texto, sin leer |
| Límite de diferencia camisa-masa acotando la consigna del esclavo; 20 + 50 = 70 °C | Lección `reactor-a-fondo` (diferencia máxima de 50 °C como ejemplo); cálculo. La forma de implantarlo es una de las posibles | Recalculado; libro de texto |
| Rango partido 0–50 % frío y 50–100 % calor, tabla y cuentas (60 %, 30 %, 60 %) | Ejemplo declarado en el encargo; cálculo | Recalculado |
| Control de relación y anticipativo (idea) | Libro de texto | Libro de texto, sin leer |
| Rampas: 100 min y 150 min | Cálculo | Recalculado |
| Posicionador: compara la posición pedida con la real del vástago | Libro de texto | Libro de texto, sin leer |
| Válvula lineal o isoporcentual (solo mención) | Libro de texto | Libro de texto, sin leer |
| Válvula pegada: salida en diente de sierra y PV a saltos | Control Engineering, PID spotlight 18 (OP en diente de sierra y PV casi cuadrada en lazos de caudal); simulación propia | Fragmento de buscador; simulado |
| Ejemplo de planta (R-301, TIC-301, TIC-302, FX-301): 49 °C a los 40 min, fin a las 16:40, 40 % de apertura con salida del 30 % | Equipos y valores ficticios; cálculo | Recalculado |
| Toda desviación se documenta y explica | ICH Q7, 8.15 | Leído en el PDF |

## Lo que quería incluir y dejé fuera

- **Citas literales y figuras del libro de Kuphaldt**: no se pudo abrir.
- **Valores típicos de sintonía** (ganancias, tiempos integrales por tipo de lazo) y métodos de sintonía (Ziegler-Nichols y otros): sin fuente leída, y no son tarea del operador.
- **Tiempos de respuesta típicos en cifras** para caudal, presión o temperatura: solo se dice «segundos» frente a «minutos u horas».
- **Zona muerta o solape en el punto medio del rango partido** y su relación con oscilaciones: solo fragmento de buscador.
- **Derivativa calculada sobre la PV en lugar del error** y otras variantes concretas del algoritmo.
- **Orden para devolver una cascada a servicio** (primero el esclavo, luego el maestro): práctica habitual, pero sin fuente leída y depende del procedimiento de cada planta.
- **Prioridades de alarma y normas ISA, IEC y EEMUA**: de pago y fuera del tema.
- **Límites reales de diferencia camisa-masa del vitrificado**: los da el fabricante; se usa el valor de ejemplo de la lección del reactor.
