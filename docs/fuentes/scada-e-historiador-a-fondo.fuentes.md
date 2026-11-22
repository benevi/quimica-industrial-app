# Fuentes: scada-e-historiador-a-fondo

Copias locales leídas: `src_csv/` (part11.txt, fdadi.txt, fda2003.txt, a11.txt, pics041.txt, q7.txt) y, descargadas en esta sesión en `lecciones/tmp-scada/`, cuatro páginas del libro de Kuphaldt en control.com (texto extraído a .txt). La página de interfaces persona-máquina se leyó en la copia ya existente `src_isa/programmable-logic-controllers_human-machine-interfaces.html.txt`.

URL de cada documento:
- Kuphaldt, *Lessons in Industrial Instrumentation* / *Lessons in Industrial Automation* (control.com, licencia CC BY 4.0):
  - Interfaces persona-máquina: https://control.com/textbook/programmable-logic-controllers/human-machine-interfaces/
  - Indicadores, registradores, interruptores y alarmas: https://control.com/textbook/introduction-to-industrial-instrumentation/other-types-of-instruments/
  - Conversión analógico-digital (muestreo y *aliasing*): https://control.com/textbook/digital-data-acquisition-and-networks/analog-digital-conversion/
  - Bloques de función FOUNDATION Fieldbus (estado de la señal): https://control.com/textbook/foundation-fieldbus-instrumentation/ff-function-blocks/
  - Controladores PID digitales (leída para SCADA y consignas remotas; no se cita nada concreto de ella): https://control.com/textbook/closed-loop-control/digital-pid-controllers/
- 21 CFR Part 11: https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11
- FDA, *Data Integrity and Compliance With Drug CGMP. Questions and Answers* (diciembre de 2018): https://www.fda.gov/media/119267/download
- FDA, *Part 11, Electronic Records; Electronic Signatures — Scope and Application* (agosto de 2003): https://www.fda.gov/media/75414/download
- EudraLex vol. 4, anexo 11 (2011): https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf
- PIC/S PI 041-1 (1 de julio de 2021): https://picscheme.org/docview/4234
- ICH Q7: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf
- Código de la app: `src/sim/reactor/model.ts`, `src/sim/reactor/guia.ts`, `src/components/sim/reactor/Panels.tsx`, `docs/simulador-reactor.md`; lección `src/content/nivel12-reactor.ts`.

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Las pantallas modernas funcionan por etiquetas: cada objeto gráfico asociado al menos a una etiqueta, que apunta a datos del PLC mediante una base de datos de etiquetas residente en la pantalla | Kuphaldt, HMI | Leído («almost exclusively tag-based… tag name database file resident in the HMI») |
| Las etiquetas de entradas reales deben ser de solo lectura en la pantalla para evitar conflictos | Kuphaldt, HMI | Leído («data points in the PLC linked to real-world inputs should always be limited as read-only») |
| Nunca más de un elemento escribe en el mismo dato; si no, resultados extraños | Kuphaldt, HMI | Leído («never allow more than one element to write to any data point… with weird results») |
| La pantalla puede restringir acceso según privilegios de usuario; una interfaz eficaz parte de la información mínima que el usuario necesita ver y manejar | Kuphaldt, HMI | Leído (resumen inicial y «REVIEW») |
| Guardar datos largo tiempo ocupa mucha memoria; el PLC «sirve» el dato actual y la HMI guarda presente y pasado | Kuphaldt, HMI | Leído («relieves the PLC of having to do this task, which is very memory-intensive») |
| Analogías frontend/API y condición de carrera | Analogía didáctica | Propia, no es un dato técnico |
| Normas de diseño de pantallas de pago, sin documento gratuito leído que las reproduzca | — | No se usa ninguna regla de ellas |
| Disposición de la pantalla (cabecera, banda de alarmas, sinóptico, carátula) | Valor de ejemplo declarado («Imagina») | Coherente con la lección `sistema-de-control-a-fondo` |
| PV 70,2; SP 70,0; OUT 38 % | Valor de ejemplo declarado | — |
| Modos manual, automático y cascada en el simulador; cascada TIC-204 (masa) sobre TIC-204J (camisa); en cascada el maestro da la consigna al esclavo | `src/sim/reactor/model.ts` (tipo LoopMode "MAN" / "AUTO" / "CAS"; bloque «cascada masa → camisa»), `docs/simulador-reactor.md` | Leído en el código |
| Consigna remota frente a local | Lección `mapa-de-sistemas-a-fondo` (Kuphaldt, *supervisory control*) | Leído en la lección del repo |
| Estado de la señal: Good, Bad, Uncertain; subestados como «Sensor Failure» | Kuphaldt, FF function blocks | Leído |
| Un bloque puede configurarse para poner la salida en el último valor bueno ante una entrada mala | Kuphaldt, FF function blocks | Leído («Set output signal to last “Good” value») |
| Un dato no significa nada sin metadatos | FDA 2018, pregunta 1b | Leído |
| Tabla etiqueta / hora / valor / calidad con valores | Valor de ejemplo declarado | — |
| Muestrear es como hacer fotos fijas; lo que cambia entre muestras no se detecta ni aparece en los datos | Kuphaldt, conversión AD | Leído |
| Nyquist: mínimo absoluto 2 muestras por ciclo; realista 10 o más; buena regla 10 por periodo | Kuphaldt, conversión AD | Leído |
| *Aliasing*: el sistema cree que la frecuencia es mucho más baja; dato completamente incorrecto pero plausible | Kuphaldt, conversión AD | Leído («completely incorrect, yet completely plausible signal») |
| Cuenta 1: 120 / 10 = 12 s; 120 / 2 = 60 s | Cálculo | Recalculado con python |
| Cuenta 2: pico de 10:00:10 a 10:00:50 sin muestra con muestreo a 10:00:00 y 10:01:00 | Cálculo con valores de ejemplo declarados | Comprobado |
| Compresión por banda muerta simple: guardar solo si el valor se aleja del último guardado más que la banda | Principio general; fragmento de buscador de documentación de fabricantes de historiadores («reports any new value that falls outside the deadband… then centers the deadband around the new value») | Fragmento de buscador (hosts no accesibles con curl); en la lección se presenta como principio calculado a mano y se dice que hay variantes. No se usan cifras de esa fuente |
| Existe la variante *swinging door* | Lección corta `scada-e-historiador` del repo; fragmento de buscador | Ya estaba en la app; fragmento de buscador |
| Cuenta 3: tabla de lecturas; banda 1,5 °C no guarda nada; banda 0,5 °C guarda 60,6, 61,4 y 60,4; tres lecturas sobre 61,0, máximo 61,4, unos 30 s | Cálculo con valores de ejemplo declarados | Simulado con python (`tmp-scada/calc.py`) |
| Cambios de configuración solo de forma controlada con procedimiento | Anexo 11, punto 10 | Leído |
| Banda de las variables críticas justificada y probada en la validación | Lección corta del repo; anexo 11, punto 4.7 (pruebas de límites de parámetros) como apoyo general | Leído; la frase concreta sobre la banda es una aplicación, no una cita |
| Cuenta 4: 10:14 + 4 min = 10:18 | Cálculo con valores de ejemplo declarados | Comprobado |
| Reloj del sistema operativo sincronizado con el de los sistemas conectados; acceso a todos los relojes restringido a personal autorizado; usuarios normales sin acceso a relojes | PIC/S PI 041-1, 9.5 | Leído |
| Marcas de tiempo con referencia horaria clara y explicada en la documentación del sistema | FDA 2003, nota 5 | Leído |
| Contemporáneo y coherente (orden cronológico) como atributos ALCOA+ | PIC/S 7.5 a través de la lección `alcoa-a-fondo` | Leído en la lección del repo |
| Ventanas de tendencia del simulador: 30 min, 2 h, 8 h | `Panels.tsx` (botones 30, 120, 480 min) | Leído en el código |
| El simulador guarda un punto de tendencia cada 10 s | `model.ts` (`if (s.t % 10 < dt) s.hist.push`) | Leído en el código |
| Registrar PV, SP y salida es muy útil para diagnosticar; una salida errática con la PV en consigna no es un problema del control | Kuphaldt, indicadores y registradores | Leído |
| PV separándose con la salida al 100 % indica falta de capacidad | Razonamiento didáctico a partir del funcionamiento del lazo | No es cita; deducción explicada en el texto |
| Curva dorada (*golden batch*): perfil de referencia a partir de lotes buenos para comparar | Fragmentos de buscador (artículo de Frontiers 2024, prensa sectorial, fabricantes) | Fragmento de buscador; se usa solo como nombre del concepto, sin cifras |
| 2610 kg, de 20 a 70 °C, 221850 kJ, 50 kW de media, 4437 s, unos 74 min | Lección `reactor-a-fondo` (nivel12-reactor.ts) | Leído y recalculado: 2610 × 1,7 × 50 = 221850; 221850 / 50 = 4437 s = 73,95 min |
| 40 kW de media con camisa sucia | Valor de ejemplo declarado | — |
| 221850 / 40 = 5546 s, unos 92 min; 50 / 74 = 0,68 °C/min; 50 / 92 = 0,54 °C/min; un 25 % más | Cálculo | Recalculado (5546,25 s = 92,4 min; 0,676 y 0,541 °C/min; 5546,25 / 4437 = 1,25) |
| Pared sucia baja U; agitación baja o parada baja U | `docs/simulador-reactor.md` («U que baja si se para el agitador o si la pared está sucia»), `guia.ts` | Leído |
| Si los tiempos de calentar se alargan lote a lote, algo se ensucia | `guia.ts`, camisa sucia, «enPlanta» | Leído en el código |
| Avería «camisa sucia» deja U en el 60 % durante todo el lote | `model.ts` (factor 0.6; «todo el lote») | Leído en el código |
| Avería «sonda congelada»: TT-204A fija y TT-204B sigue subiendo | `guia.ts` y `model.ts` | Leído en el código |
| Cuando se generan para cumplir un requisito CGMP, todos los datos pasan a ser registro CGMP | FDA 2018, pregunta 12 | Leído |
| Registro de lote: fechas y horas, resultados reales de parámetros críticos, desviaciones observadas | ICH Q7, 6.52 | Leído |
| Alcance de validación y controles de integridad basados en evaluación de riesgos documentada | Anexo 11, punto 1 | Leído |
| Tabla de qué es registro del lote | Aplicación didáctica de FDA preg. 12, Q7 6.52 y anexo 11 punto 1; la fila de alarmas se apoya en la lección corta del repo | Elaboración propia, marcada como ejemplo por su contexto |
| Cambio de dato: entrada anterior, quién y cuándo | ICH Q7, 5.43 | Leído |
| Audit trail seguro, generado por ordenador, con fecha y hora, de acciones que crean, modifican o borran | 21 CFR 11.10(e) | Leído |
| Motivo documentado del cambio o borrado | Anexo 11, punto 9 | Leído |
| Limitar acceso a autorizados; *authority checks*; *operational system checks* del orden de pasos | 21 CFR 11.10(d), (g), (f) | Leído |
| Restringir por medios técnicos la capacidad de cambiar parámetros de proceso y datos; administrador independiente de quien genera el contenido | FDA 2018, pregunta 4 | Leído |
| Reparto de papeles (operador, ingeniería, administrador) | Valor de ejemplo declarado («Un reparto típico, de ejemplo») | — |
| Cuentas compartidas de solo lectura aceptables para ver datos; no para acciones atribuibles | FDA 2018, pregunta 5 | Leído |
| Copias exactas y completas, legibles por personas y electrónicas | 21 CFR 11.10(b) | Leído |
| Copias impresas claras; para liberación, impresiones que indiquen si un dato cambió | Anexo 11, 8.1 y 8.2 | Leído |
| Copia electrónica válida si conserva contenido y significado, con todos los metadatos | FDA 2018, pregunta 9 | Leído |
| Si se puede buscar, ordenar o hacer tendencias, las copias deberían permitirlo cuando sea razonable y técnicamente posible | FDA 2003, III.C.4 (líneas 291-294) | Leído |
| Muchos registros electrónicos deben conservarse en formato dinámico | PIC/S 7.7.3 | Leído |
| Copia verdadera de un registro electrónico por medios electrónicos con metadatos; prohibir PDF si puede perderse metadato | PIC/S 7.7 (tabla «How should the true copy be issued and controlled?») | Leído |
| Estático: registro fijo como papel o imagen electrónica; dinámico: permite interactuar, p. ej. hoja de cálculo con fórmulas o entradas modificables | FDA 2018, pregunta 1d | Leído |
| Lo que pierde una captura (puntos, calidad, ampliar) y un Excel (cambios sin registro, sin calidad ni audit trail) | Aplicación didáctica de FDA 1d, 1b y 11.10(e) | Deducción explicada |
| Informes resumen limitados: a menudo faltan datos y metadatos críticos y no se puede revisar el original | PIC/S 7.8.2 | Leído |
| Transferir datos directamente a la ubicación segura, no copiarlos desde el disco local | PIC/S 9.4 | Leído |
| Usar la exportación validada del sistema y dejar constancia de etiquetas, periodo y consulta | Recomendación práctica derivada de 11.10(b), PIC/S 9.4 y 7.7 | Elaboración propia; en planta, el SOP |
| Controles que eviten omisiones de datos (sistema apagado y datos no capturados) | ICH Q7, 5.43 | Leído |
| Datos registrados por un segundo medio además del ordenador | ICH Q7, 5.49 | Leído |
| Incidentes de sistemas informatizados registrados e investigados | ICH Q7, 5.46 | Leído |
| Todos los incidentes comunicados y evaluados | Anexo 11, punto 13 | Leído |
| Ejemplo de planta (lote LT-2611-09, AX-22, 0,53 °C/min, 72,0 °C, 72,1 a 73,4 °C) | Valores de ejemplo; (45 − 20) / 47 = 0,53 °C/min | Recalculado |
| Pregunta 1: 180 / 10 = 18 s | Cálculo | Recalculado |
| Pregunta 3: 70,0 + 2,0 = 72 °C | Cálculo | Recalculado |
| Pregunta 5: 14:20 + 3 min = 14:23 | Cálculo | Recalculado |
| Pregunta 7: 50 / 0,5 = 100 min; 100 − 74 = 26 min | Cálculo | Recalculado |

## Lo que quería incluir y dejé fuera

- Reglas de diseño de pantallas de alto rendimiento (fondos grises, color reservado para alarmas, jerarquía de pantallas por niveles): proceden de la norma ISA-101 y de guías de pago (EEMUA); no encontré un documento gratuito leído que las reproduzca.
- Detalle del algoritmo de puerta giratoria (*swinging door*) y parámetros típicos de compresión de los historiadores comerciales: solo vistos en fragmentos de buscador de documentación de fabricantes y patentes (hosts no accesibles con curl).
- Frecuencias de muestreo «típicas» de un historiador en planta farmacéutica: sin fuente gratuita leída; se usan solo valores de ejemplo.
- Cifras de beneficio de la «curva dorada» (coste de desviaciones por lote): solo en fragmentos de buscador de prensa sectorial; descartadas.
- Requisitos del borrador de 2025 del anexo 11 sobre registro de alarmas y zona horaria: ya los trata `audit-trail-a-fondo`; no se repiten aquí.
