# Fuentes de la lección `sistema-de-control-a-fondo`

Comprobado el 20 de noviembre de 2026. Temporales en `src_dcs/`.

## Aviso importante sobre las fuentes técnicas

- **control.com (Kuphaldt, «Lessons in Industrial Instrumentation») no se pudo leer**: curl devuelve 403 (pantalla de comprobación de Cloudflare) incluso con cabeceras completas de navegador, y la herramienta de lectura web no resuelve el host. No se ha usado nada de ese libro.
- **Wikipedia tampoco es accesible** desde esta sesión (error de red).
- **ISA-88 / IEC 61512, ISA-18.2, ISA-101** son de pago y no se han leído. Lo que la lección dice del modelo de lotes sale de fragmentos del buscador sobre documentación abierta de un fabricante (Rockwell Automation, ayuda en línea de FactoryTalk Batch) y de un blog técnico; está marcado abajo como «fragmento de buscador». El texto de la lección lo advierte al lector («tal como lo describe la documentación pública de fabricantes; tu sistema puede usar otros nombres») y no da ninguna cifra apoyada en fragmentos.
- La parte normativa (anexo 11, 21 CFR 11, ICH Q7, PIC/S PI 041-1) y las dos guías de la FDA sí se descargaron y se leyeron enteras o en los apartados citados.

## Documentos leídos de verdad

| Clave | Documento | URL |
|---|---|---|
| A11 | EudraLex vol. 4, anexo 11 «Computerised Systems» (revisión de enero de 2011), PDF completo | https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf |
| P11 | 21 CFR Part 11, texto de eCFR (versión con fecha 2025-01-01), apartados 11.10, 11.50, 11.70, 11.100, 11.200, 11.300 | https://www.ecfr.gov/api/versioner/v1/full/2025-01-01/title-21.xml?part=11 |
| Q7 | ICH Q7, apartados 5.40 a 5.49, 6.18 y 6.52 | https://database.ich.org/sites/default/files/Q7%20Guideline.pdf |
| PI041 | PIC/S PI 041-1 (1 de julio de 2021), apartado 9.5 «System security for computerised systems» (expectativas 1, 2 y 5) y parte de 9.6 | https://picscheme.org/docview/4234 |
| FDA83 | FDA, «Computerized Systems in Drug Establishments (2/83)», guía de inspección: secciones II a V | https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/computerized-systems-drug-establishments-283 |
| FDAGL | FDA, «Glossary of Computer System Software Development Terminology (8/95)»: entradas analog, digital, analog-to-digital converter, digital-to-analog converter, sensor, actuator, audit trail | https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/glossary-computer-system-software-development-terminology-895 |
| RD175 | Real Decreto 175/2008 (título de Técnico Superior en Química Industrial), módulo «Regulación y control de proceso químico»: resultados de aprendizaje 5 y 6 y contenidos básicos | https://www.boe.es/boe/dias/2008/02/23/pdfs/A10900-10929.pdf |

Descargados pero no usados en el texto: PIC/S PI 011-3 (https://picscheme.org/docview/3444; solo se miró el glosario y el punto 8.5) y la guía de la FDA «Data Integrity and Compliance With Drug CGMP» (https://www.fda.gov/media/119267/download).

## Solo fragmento de buscador (no leído)

| Clave | Qué es | URL que devolvió el buscador |
|---|---|---|
| RA-fases | Ayuda en línea de FactoryTalk Batch, «Phase commands» | https://www.rockwellautomation.com/en-us/docs/factorytalk-batch/17-00/factorytalk-eprocedure-online-help-ditamap/the--ftb--phase-simulator/phase-status-dialog-box/phase-commands.html |
| RA-receta | Ayuda en línea de FactoryTalk Batch, «Recipe Editor» | https://www.rockwellautomation.com/en-fi/docs/factorytalk-batch/18-00/factorytalk-batch-online-help-ditamap/factorytalk-batch/recipe-editor.html |
| RA-válvula | Ayuda de Studio 5000 Logix Designer, instrucción «Process Valve (PVLV)» | https://www.rockwellautomation.com/en-us/docs/studio-5000-logix-designer/38-01/contents-ditamap/instruction-set/plantpax-instructions/pvlv.html |
| RA-alarmas | Ayuda de Studio 5000 View Designer, «Alarm Summary» | https://www.rockwellautomation.com/en-us/docs/studio-5000-view-designer/10-00/studio-5000-view-designer-help-ditamap/use-the-runtime-application/interact-with-alarms/alarm-table-interface-components/alarm-summary-for-a-large-hmi-device.html |
| Etech | Blog «Understanding S88 states» | https://etechgroup.com/blog/general/part-3-of-3-understanding-s88-states |
| Patente | Patente US 6289252 (cita ISA S88.01 y un modelo de estados de ejemplo) | https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/6289252 |
| DCS-res | Resúmenes de DCS (Wikipedia «Distributed control system», documento en Scribd) | https://en.wikipedia.com/wiki/Distributed_control |

## Tabla de afirmaciones

| Afirmación de la lección | Fuente | Cómo se comprobó |
|---|---|---|
| El lazo básico de un proceso controlado por ordenador es sensores, procesador central y actuadores | FDA83, sección II («general system loop (sensors, central processor, activator)») | Leído en el documento |
| Capas: campo, entradas y salidas, controlador, red, servidores, estación de operación, historiador | FDA83, sección III (dispositivos de entrada y salida, convertidores de señal, CPU, sistemas distribuidos, redes, periféricos); DCS-res para servidores y estaciones de operación; el historiador ya figura en la lección `dcs-scada-recetas` | FDA83 leído; el resto, fragmento de buscador y lección previa. La columna «si falla» es razonamiento a partir de la función de cada capa, no cita |
| El programa de control corre en el controlador y no en la pantalla; si una estación se cuelga, el control sigue | DCS-res («el fallo de un procesador solo afecta a la parte de planta que controla»); FDA83 describe sistemas distribuidos en los que cada microordenador lleva un equipo | Fragmento de buscador más FDA83 leído. La frase concreta sobre la estación colgada es consecuencia de la arquitectura; no hay cita literal leída. El texto remite al procedimiento para el fallo del controlador o de la corriente |
| PLC: controla un equipo; DCS: planta o área; SCADA: supervisión de datos de PLC | Lección previa `dcs-scada-recetas`; RD175 confirma que PLC, control distribuido, SCADA y salas de control son contenido oficial del módulo; PI 011-3 (glosario: «embedded system ... PLC based, whose sole purpose is to control a particular piece of automated equipment») | RD175 y PI 011-3 leídos. «Qué verás tú» en cada caso es descripción general sin fuente leída |
| Señal analógica: valores continuos; señal digital: valores discretos | FDAGL, entradas «analog» y «digital» | Leído en el documento |
| Un convertidor traduce la señal analógica a números; si falla, la pantalla puede mostrar un valor distinto del que mide el sensor | FDAGL («analog-to-digital converter»); FDA83, «Signal Conversion» e «Input recording» (ejemplo del termopar que marca 80 °C y se lee 100 °C) | Leído en el documento |
| Sensor: dispositivo de entrada; actuador: dispositivo de salida | FDAGL, entradas «sensor» y «actuator» | Leído en el documento |
| Siglas DI, DO, AI, AO y sus ejemplos (final de carrera, orden de marcha, transmisor, apertura de válvula de control) | Uso general en automatización; RA-válvula menciona finales de carrera como realimentación de la válvula | Sin fuente leída para las siglas: convención general. Fragmento de buscador para los finales de carrera |
| Recuento de señales: 7 DO, 14 DI, 3 AI, 2 AO, total 26 | Valor de ejemplo declarado; cálculo | Recalculado con python: 6+1=7; 6×2+2=14; 7+14+3+2=26 |
| Tipos de pantalla (sinóptico, unidad, carátula, tendencias, lista de alarmas, secuencia) | RA-alarmas (la lista de alarmas muestra las activas o sin reconocer, con prioridad); RA-válvula (carátula del equipo en la HMI); RD175 (salas de control como contenido oficial) | Fragmento de buscador; la clasificación de pantallas es descripción general, sin norma leída (ISA-101 es de pago) |
| Una alarma sin reconocer parpadea y deja de parpadear al reconocerla; reconocida puede seguir activa | RA-alarmas («flashes when unacknowledged alarms are present»; estado «In Alarm/Acknowledged») | Fragmento de buscador. El texto lo presenta como «lo corriente», no como norma |
| No hay un código de colores único entre plantas | Sin fuente leída | Aviso de prudencia; no se da ningún color concreto |
| Válvula todo o nada con dos finales de carrera: cuatro combinaciones (cerrada, abierta, en tránsito, combinación imposible) | Lógica: dos señales de dos valores dan 2 × 2 = 4 combinaciones; RA-válvula (fallo de finales de carrera cuando ambos están activos o ambos inactivos, configurable) | Razonamiento más fragmento de buscador |
| Alarma de discrepancia: orden y confirmación no coinciden pasado el tiempo de recorrido; la válvula puede no haberse movido o haberse quedado a medias | RA-válvula (alarmas «Full Stall» y «Transit Stall» tras un tiempo configurado); FDA83, «Alarms» (alarmas ligadas a «feedback signals to confirm execution of commands») | FDA83 leído; el detalle del temporizador, fragmento de buscador. «Alarma de discrepancia» es el nombre genérico; cada sistema usa el suyo |
| Estados de un motor (disponible, en marcha, parado, fallo) y modos (automático, manual, fuera de servicio) | Sin fuente leída; los modos manual y automático están en la lección `lazos-de-control` | Descripción general, presentada con «suele» |
| Lectura de tendencias: escalas, rampa, escalón, oscilación, lectura congelada | Sin fuente leída (Kuphaldt no accesible). La oscilación ya está en `lazos-de-control` | Razonamiento. La «lectura congelada» se presenta como motivo para comprobar, no como prueba |
| Velocidad de calentamiento: 15 °C en 30 min = 0,5 °C/min = 30 °C/h; faltan 18 °C, 36 min, hacia las 11:16 | Valor de ejemplo declarado; cálculo | Recalculado con python: 15/30=0,5; 0,5×60=30; 18/0,5=36; 10:40 + 36 min = 11:16 |
| ISA-88 es de pago | Catálogo de ISA (hecho conocido; el propio encargo lo indica) | No comprobado en la web de ISA |
| Niveles del procedimiento: procedimiento, procedimiento de unidad, operación, fase; la fase es el nivel más bajo y conecta con el control básico | RA-receta («An operation consists of one or more recipe phases»; «The phase provides an interface to basic control»); lección previa `dcs-scada-recetas` | Fragmento de buscador |
| Receta maestra como plantilla de un producto; la receta de control se crea de ella para cada lote | RA-receta y Patente («Each control recipe is generally created from a quantity independent master recipe prior to production») | Fragmento de buscador |
| Parámetros de receta: cantidades, consignas, tiempos; el operador no los cambia por su cuenta | Lección previa `dcs-scada-recetas`; FDA83, sección IV («Fixed Setpoint», «Variable Set point») | FDA83 leído |
| Estados de fase: idle, running, held, stopped, aborted, complete | RA-fases, Etech y Patente | Fragmento de buscador. La Patente indica que la norma no obliga a un modelo de estados único: por eso el texto dice «en la documentación de fabricante consultada» |
| Órdenes: start, hold, restart, stop, abort, reset; solo se ejecutan las órdenes válidas en cada estado; reset devuelve a reposo | RA-fases («only legal state change commands are executed»; RESET devuelve a Idle; RESTART pasa de Held a Running) | Fragmento de buscador |
| Algunos sistemas añaden una pausa distinta de la retención | Etech («Held and Paused are quiescent») | Fragmento de buscador |
| Un dato crítico introducido a mano lleva una comprobación adicional, por un segundo operador o por medios electrónicos | A11, punto 6; Q7, 5.45 | Leído en los dos documentos |
| Secuencia con pasos y condiciones de transición; el sistema no avanza hasta que se cumple | P11, 11.10(f) (comprobaciones que obligan a seguir la secuencia permitida de pasos); FDA83, «Program Over-rides» (ejemplo del mezclador que no reanuda hasta que baja la temperatura); RD175 (programación de secuencias de control con PLC) | Leído. La forma en que cada pantalla muestra las condiciones es descripción general («normalmente») |
| Condición de ejemplo: 65 °C y 30 min | Valor de ejemplo declarado | — |
| Un salto manual de paso queda registrado y está reservado a personal autorizado | FDA83, «Program Over-rides» y «Manual Back-up Systems» (el procedimiento debe decir qué anulaciones se permiten, quién y cómo, y cómo se documentan); P11, 11.10(g) | Leído |
| Permisivo y enclavamiento | Lección previa `alarmas-y-enclavamientos` (enclavamiento); «permisivo» sin fuente leída | Definición general; ejemplo declarado |
| Qué registra el sistema solo (valores con hora, alarmas, acciones con usuario y hora) | A11, 12.4; P11, 11.10(e); FDA83, «Alarms» y «Process Documentation» | Leído |
| El registro de lote recoge fechas y horas, resultados reales de parámetros críticos y firmas de quien hace y de quien supervisa o comprueba cada paso crítico | Q7, 6.52 | Leído en el documento |
| Controles para restringir el acceso a personas autorizadas | A11, 12.1; Q7, 5.43; P11, 11.10(d) | Leído |
| Varios niveles de acceso, con el mínimo privilegio necesario | PI041, 9.5, expectativa 1 («different user access roles (levels)... least-privilege rule») | Leído. Los nombres operador, supervisor e ingeniería son ejemplo |
| Las cuentas compartidas deben prohibirse porque no permiten atribuir la acción | PI041, 9.5, expectativa 1 | Leído en el documento |
| Queda registrado quién introduce, cambia, confirma o borra un dato, con fecha y hora | A11, 12.4 | Leído en el documento |
| Firma electrónica: mismo efecto que la manuscrita dentro de la empresa, unida de forma permanente a su registro, con fecha y hora | A11, punto 14 | Leído en el documento |
| La firma muestra nombre, fecha y hora, y significado | P11, 11.50(a) | Leído en el documento |
| La firma es única de una persona y no se reutiliza ni reasigna | P11, 11.100(a) | Leído en el documento |
| En el quiz: la firma electrónica es de una sola persona; cuentas compartidas prohibidas | P11, 11.100(a); A11, punto 14; PI041, 9.5 | Leído |
| Audit trail: registro generado por el sistema de cambios y borrados relevantes, con motivo, legible y revisado con regularidad | A11, punto 9 | Leído en el documento |
| Registro de cada cambio de dato: entrada anterior, quién y cuándo | Q7, 5.43 | Leído en el documento |
| Relojes sincronizados con los de los sistemas conectados y acceso a los relojes restringido | PI041, 9.5, expectativa 2; FDA83, «Timekeeping» (comprobar la hora del sistema con un reloj independiente) | Leído |
| Sistema de respaldo si una avería puede causar pérdida permanente de registros | Q7, 5.48 | Leído. Ojo: 5.48 habla de «back-up system», no de medios alternativos |
| Los datos pueden registrarse por un segundo medio además del ordenador | Q7, 5.49 | Leído en el documento |
| Sistema manual o alternativo previsto, documentado y probado, para sistemas que soportan procesos críticos | A11, punto 16 | Leído en el documento |
| Las incidencias del sistema se comunican y evalúan (A11) o se registran e investigan (Q7) | A11, punto 13; Q7, 5.46 | Leído |
| Al recuperar el sistema hay que comprobar el punto de reanudación para no repetir pasos | FDA83, «Shutdown Recovery» («Look for the inappropriate duplication of steps in the resumption of the process») | Leído en el documento |
| El control manual de respaldo y su documentación deben estar previstos | FDA83, «Manual Back-up Systems» y «Shutdown Recovery» | Leído |
| Controlar el uso de dispositivos USB privados (incluidos teléfonos) | PI041, 9.5, expectativa 5 | Leído en el documento |
| Cierre automático de sesión por inactividad | PI041, 9.5, expectativa 1 | Leído en el documento |
| Buenas prácticas: relevo de turno, no reconocer alarmas sin mirar, no forzar señales | Recomendaciones de práctica; no forzar señales es coherente con la lección `alarmas-y-enclavamientos` y con FDA83 («Program Over-rides») | Sin norma leída específica para el relevo de turno |
| Quiz: 24 °C en 40 min = 0,6 °C/min | Cálculo | Recalculado: 24/40 = 0,6 |
| Quiz: 18 °C a 0,6 °C/min = 30 min | Cálculo | Recalculado: 18/0,6 = 30 |
| Quiz: 6 + 12 + 4 + 2 = 24 señales | Cálculo | Recalculado: 5+1=6; 5×2+2=12; total 24 |
| Quiz: 45 °C a 30 °C/h = 1,5 h = 90 min | Cálculo | Recalculado: 45/30×60 = 90 |
| Ejemplo de planta: 10 °C en 20 min = 0,5 °C/min; 20 °C restantes, 40 min | Valores de ejemplo; cálculo | Recalculado: 10/20 = 0,5; 20/0,5 = 40 |
| R-310, XV-314, TT-310, NB-22, CT-9, lote 0427 | Códigos y productos ficticios | Inventados para el ejemplo |

## Lo que quería incluir y dejé fuera por no poder verificarlo

- **Modelo físico de ISA-88** (célula de proceso, unidad, módulo de equipo, módulo de control): ninguna fuente gratuita leída ni fragmento lo definía con claridad.
- **Estados transitorios de una fase** (holding, restarting, stopping, aborting) y el detalle de qué orden se admite desde cada estado: solo fragmentos, y varían entre fabricantes.
- **Rango de las señales analógicas (4 a 20 mA)** y cómo se detecta un cable roto: no hay fuente gratuita leída (Kuphaldt inaccesible).
- **Colores concretos** de estado y de alarma, y cualquier recomendación de ISA-101, ISA-18.2 o EEMUA 191: normas de pago.
- **Redundancia de controladores, redes y servidores**, tiempos de ciclo del controlador y comportamiento exacto ante fallo de alimentación: sin fuente leída; el texto remite al procedimiento de la planta.
- **Posición de fallo de las válvulas** (abre o cierra al faltar aire o señal) vista desde la pantalla.
- **Muestreo y compresión de datos del historiador** (por qué una tendencia histórica puede verse menos fina que la de tiempo real).
- **Protocolo de sincronización horaria** (servidor de hora, NTP) y la tolerancia admitida entre relojes.
- **Componentes de la firma (11.200) y controles de contraseñas (11.300)**: leídos, pero ya están en la lección `part-11-y-anexo-11`; no se repiten.
- **Cifras de tiempo de recorrido de una válvula**: se dejó en «unos segundos» y «el tiempo previsto», sin número.
