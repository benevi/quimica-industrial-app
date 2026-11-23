# Fuentes de la lección `tuberias-y-valvulas-a-fondo`

Cómo leer la columna «Comprobación»:

- **Leído en el documento**: descargado con curl, pasado a texto y leído el pasaje.
- **Fragmento de buscador**: solo visto en el resumen del buscador; no se pudo abrir. No se usa para ninguna cifra.
- **Recalculado**: cuenta rehecha con python (`tmp-tuberias/calc.py`), con el mismo redondeo que el texto.
- **Valor de ejemplo declarado**: número inventado para la cuenta; el texto lo dice.
- **Repo**: remite a una lección ya publicada en la app.
- **Razonamiento**: consecuencia directa de algo leído o hecho evidente, sin cifra propia.

Documentos leídos (copias en `tmp-tuberias/dl/`):

- **K-FAIL**: Kuphaldt, *Lessons in Industrial Instrumentation*, «Valve failure modes». https://control.com/textbook/control-valves/valve-failure-mode/
- **K-ACT**: Kuphaldt, «Control valve actuators». https://control.com/textbook/control-valves/control-valve-actuators/
- **K-SLIDE**: Kuphaldt, «Sliding-stem valves». https://control.com/textbook/control-valves/sliding-stem-valves/
- **K-ROT**: Kuphaldt, «Rotary-stem valves». https://control.com/textbook/control-valves/rotary-stem-valves/
- **K-PACK**: Kuphaldt, «Valve packing». https://control.com/textbook/control-valves/valve-packing/
- **K-SEAT**: Kuphaldt, «Valve seat leakage». https://control.com/textbook/control-valves/valve-seat-leakage/
- **K-PIPE**: Kuphaldt, «Pipe and pipe fittings». https://control.com/textbook/instrument-connections/pipe-and-pipe-fittings/
- **K-ONOFF**: Kuphaldt, «On/off valves». https://control.com/textbook/discrete-control-elements/onoff-valves/
- **PED**: Directiva 2014/68/UE de equipos a presión, versión española, artículo 2 y anexo I. https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=CELEX:32014L0068
- **RD485**: Real Decreto 485/1997, anexo VII, apartado 4. https://www.boe.es/buscar/act.php?id=BOE-A-1997-8668
- **NTP566**: INSST, NTP 566 «Señalización de recipientes y tuberías: aplicaciones prácticas» (2000), ficha HTML con el texto íntegro. https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/16-serie-ntp-numeros-541-a-575-ano-2001/ntp-566-senalizacion-de-recipientes-y-tuberias-aplicaciones-practicas.
- **Q7**: ICH Q7, apartados 4.23, 5.11, 5.13, 6.52, 7.21, 8.12, 8.13. https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (copia en `src_dcs/q7new.txt`)
- **FDA-HPW**: FDA, «Guide to inspections of high purity water systems» (7/93). https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/high-purity-water-system-793
- **OMS**: OMS, TRS 1033 (2021), anexo 3, «Good manufacturing practices: water for pharmaceutical use» (copia ya descargada en `src_agua/dl/who.txt`). https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex3-gmp-water-for-pharmaceuticals-use.pdf

## Afirmaciones del cuerpo

| Afirmación | Fuente | Comprobación |
|---|---|---|
| DN: cifra de identificación común a todos los elementos de un sistema de tuberías; número redondeado de referencia sin relación estricta con las dimensiones de fabricación; se escribe DN seguido de un número | PED, art. 2.11 | Leído en el documento |
| El diámetro interior depende del grosor de pared y sale de las tablas del tubo | Razonamiento a partir de PED 2.11 | Razonamiento |
| PN como «talla» de presión; mayor número, más presión | Analogía con las clases ANSI de K-PIPE (las clases crecen con la presión) | Leído para las clases ANSI; el PN se explica por analogía, sin cifras |
| La presión admisible baja con la temperatura porque los metales se debilitan | K-PIPE | Leído en el documento |
| Bridas unidas deben ser de igual clase y tamaño; la junta debe corresponder a la clase; cada unión es un sistema completo | K-PIPE | Leído en el documento |
| PS = presión máxima admisible especificada por el fabricante; TS = temperaturas máxima y mínima admisibles | PED, art. 2.8 y 2.9 | Leído en el documento |
| En la Directiva «presión» es la manométrica y el vacío se expresa con valor negativo | PED, art. 2.7 | Leído en el documento |
| Las superficies en contacto no deben alterar la calidad (Q7 5.11) | Q7 5.11 | Leído en el documento |
| Inoxidable: capa protectora de cromo; atacable por cloruros y ácidos. Acero al carbono se oxida y se disuelve con ácidos | Lección `redox-a-fondo` (Fe + 2 HCl, capa pasiva, picadura) | Repo |
| PTFE-lined: acero por fuera, PTFE por dentro; la funda es el punto débil en vacío | Fabricantes (Mersen, Crane Resistoflex) y una patente, vistos en el buscador | **Fragmento de buscador**; sin cifras en el texto |
| Vitrificado: resiste casi todos los ácidos; choque térmico | Lección `reactor-a-fondo` | Repo |
| Vidrio: deja ver el líquido y es frágil | Hecho evidente | Razonamiento; sin cifras |
| OMS: materiales que no cedan ni absorban, resistentes a la corrosión; 316L recomendado en general (o PVDC) | OMS, anexo 3, apartado de materiales de construcción | Leído en el documento |
| Soldadura = unión permanente (solo se separa destruyéndola) | PED, art. 2.13 | Leído en el documento |
| OMS: soldadura orbital en inoxidable, con registros de todas las soldaduras | OMS, anexo 3 | Leído en el documento («logs of all welds») |
| La junta es más blanda que la brida y se aplasta para sellar | K-PIPE | Leído en el documento |
| FDA: en agua farmacéutica no debe haber uniones roscadas; todas sanitarias o soldadas a tope | FDA-HPW, apartado de tuberías | Leído en el documento |
| Uniones sanitarias = dos bridas con abrazadera exterior; entre roscas quedan huecos donde se refugian microbios | K-PIPE | Leído en el documento |
| Apriete en cruz, por etapas de par creciente | K-PIPE («cross-torquing») | Leído en el documento |
| Al instalar una brida ciega se ponen juntas nuevas | K-PIPE («After installing new gaskets along with the blind») | Leído en el documento |
| OMS: comprobar que juntas y diafragmas son los correctos y están colocados y apretados correctamente | OMS, anexo 3 | Leído en el documento |
| Empaquetadura: apretar de más da rozamiento y desgaste prematuro; si bien apretada pierde, se sustituye; error típico de personal bienintencionado | K-PACK | Leído en el documento |
| Emisión fugitiva: escape no deseado, sobre todo por ejes de bombas y válvulas | K-PACK | Leído en el documento |
| Bola: abierta con el paso paralelo al flujo; la de paso total, mejor para todo o nada que para regular | K-ROT | Leído en el documento |
| Palanca paralela al tubo = abierta | Lección corta `tuberias-y-valvulas` | Repo |
| Mariposa: disco que gira; cierre estanco difícil salvo asiento blando | K-ROT | Leído en el documento |
| Compuerta: placa como puerta corredera; más para abrir/cerrar que para regular; vástago ascendente fuera = abierta, escondido = cerrada | K-SLIDE; K-ACT (válvulas de bloqueo de vástago ascendente) | Leído en el documento |
| Globo: tapón y asiento; muy usada para regular | K-SLIDE | Leído en el documento |
| Diafragma: lámina flexible contra un resalte, como pellizcar una manguera; buena con suspensiones | K-SLIDE | Leído en el documento |
| OMS prefiere válvulas de diafragma en agua farmacéutica | OMS, anexo 3 («Valves should be diaphragm type»; «zero dead leg diaphragm valves where possible») | Leído en el documento |
| Tres vías: desviar o mezclar | K-SLIDE | Leído en el documento |
| Retención: deja pasar en un sentido | Lección corta `tuberias-y-valvulas` | Repo |
| No contar la retención como aislamiento; el aislamiento va con válvulas, bloqueos y bridas ciegas | Lección `permisos-a-fondo` (NTP 223, bridas ciegas) | Repo / razonamiento |
| Válvula de fondo cerrada antes de cargar | Lección `reactor-a-fondo` (comprobaciones previas) | Repo |
| Válvulas de seguridad y discos de rotura son «accesorios de seguridad» | PED, art. 2.4 | Leído en el documento |
| Muchas válvulas de control no cortan del todo; por eso llevan válvulas de bloqueo manuales | K-SEAT | Leído en el documento |
| Actuador neumático: aire contra membrana o pistón y un muelle | K-ACT | Leído en el documento |
| F = P × A; 1 bar sobre 0,3 m de diámetro da 7069 N, unos 720 kg | Valor de ejemplo declarado; fórmula de K-ACT | Recalculado: 7068,6 N; 720,5 kg |
| Pérdida de aire: con muelle, posición de fallo conocida; eléctricas suelen quedarse en la última posición | K-FAIL | Leído en el documento |
| Aire para abrir = falla cerrada; aire para cerrar = falla abierta | K-FAIL | Leído en el documento |
| Elegir primero la posición más segura para el proceso, no por costumbre; ejemplo de la refrigeración del motor: fallo abierto | K-FAIL | Leído en el documento |
| Tabla de FC/FO del reactor | Lección `pid-a-fondo` | Repo |
| Fallo en posición (FL) requiere un dispositivo que atrape el aire | K-FAIL | Leído en el documento |
| Volante manual en actuadores para posicionar si falla el aire; dos válvulas de bloqueo y una de bypass alrededor de la de control | K-ACT | Leído en el documento |
| Tuberías instaladas de forma permanente identificadas (rotulado, documentación, sistema de control u otros medios) | Q7 4.23 | Leído en el documento |
| Equipos principales y líneas de proceso fijas identificados | Q7 5.13 | Leído en el documento |
| Etiquetado obligatorio de tuberías visibles con productos peligrosos; a lo largo de la tubería, en número suficiente y cerca de válvulas y conexiones; sustituible por señales de advertencia del anexo III o pictogramas CLP | RD485, anexo VII.4 | Leído en el documento |
| El RD 485/1997 no fija colores de tuberías | RD485, anexo VII completo | Leído (no aparece código de colores de tuberías) |
| Colores UNE 1063 según NTP 566: verde agua, rojo vapor de agua, amarillo gases combustibles, naranja ácidos, violeta lejías, sepia líquidos combustibles; en el ejemplo de la figura 5, azul para el aire de instrumentación; la NTP usa además DIN 2403 | NTP566, tabla 2 y figura 5 | Leído en el documento. Aviso: la tabla se lee desordenada en el texto HTML; solo se citan los grupos cuyo color aparece pegado a su nombre. La NTP es de 2000 y cita UNE 1063:2000; no se ha podido comprobar la edición vigente de la UNE |
| Venteo en punto alto; se ventea antes de llenar una bomba | Lección `bombas-a-fondo` (bomba llena y venteada) | Repo / razonamiento |
| OMS: tuberías de agua drenables; pendiente mínima recomendada 1/100 | OMS, anexo 3 | Leído en el documento |
| «Purga» como la válvula del tramo entre dos válvulas cerradas; doble bloqueo y purga | Lección `pid-a-fondo` | Repo (terminología de la app) |
| Rama muerta: criterio de las LVP propuestas, no más de seis diámetros de la rama sin uso; pensado para sistemas calientes de 75 a 80 °C en circulación; en sistemas más fríos cualquier tramo puede formar biopelícula | FDA-HPW | Leído en el documento |
| 50 mm, 30 m: 0,0589 m³ = 59 L (quiz 58,9 L) | Valor de ejemplo declarado | Recalculado: 58,90 L |
| ICH Q7 7.21: procedimientos para evitar descargar un material en el stock equivocado | Q7 7.21 | Leído en el documento (el texto habla de materiales recibidos que se mezclan con existencias, p. ej. disolventes o silos) |
| Abrir del destino hacia el origen | Práctica habitual declarada como tal; coherente con el caso de la FDA (abrir primero la válvula secundaria) | Razonamiento; el texto remite al procedimiento |
| Caso FDA: aire que queda tras vaciar una conexión contamina el sistema al abrir la principal; solución, abrir antes la secundaria para lavar el tramo | FDA-HPW, apartado II | Leído en el documento |
| Actividades críticas presenciadas o con control equivalente; firmas de quien hace y quien comprueba cada paso crítico | Q7 8.12, 8.13 y 6.52 | Leído en el documento |
| Figura de ocho: disco ciego unido a un anillo del mismo grosor; la separación entre bridas no cambia | K-PIPE | Leído en el documento |
| Consignación, candados, bridas ciegas, permisos | Lección `permisos-a-fondo` | Repo |
| Golpe de ariete y abrir despacio | Lección `fluidos-a-fondo` | Repo |
| 3 bar sobre 50 mm de diámetro interior: 589 N, unos 60 kg | Valor de ejemplo declarado | Recalculado: 589,05 N; 60,0 kg |
| Aflojar primero los tornillos del lado lejano para que la presión salga hacia el otro lado | K-PIPE | Leído en el documento |
| Caso del Chemical Safety Board (2016): un camión descargó ácido en la boca de llenado de otro producto, cercana y de aspecto parecido; nube tóxica | Resúmenes del buscador sobre el caso MGPI (csb.gov); la web del CSB dio error de red | **Fragmento de buscador**; en el texto se dice «según los resúmenes publicados», sin cifras ni nombre de la empresa |
| Orden enviada no garantiza movimiento; final de carrera e indicador de campo | Lección corta `tuberias-y-valvulas` | Repo |

## Ejemplo de planta y quiz

| Dato | Fuente | Comprobación |
|---|---|---|
| R-101, F-301, R-102, XV-105, XV-106 | Simulador de la app, `src/sim/engine.ts` (XV-105 fondo de R-101, XV-106 entrada a R-102, incidencia de la junta del filtro) | Repo |
| V-305, V-306 | Códigos inventados | Valor de ejemplo declarado |
| Quiz: 58,9 L; 589 N; 150 mm (6 × 25); 0,12 m (12 / 100) | Cálculo | Recalculado |

## Lo que quise incluir y dejé fuera

- **Cálculo del golpe de ariete** (fórmula de Joukowsky, Δp = ρ·c·Δv, y velocidad de la onda): solo aparecía en fragmentos del buscador; libretexts.org dio error de red y el capítulo de Kuphaldt sobre mecánica de fluidos no lo trata. Se remite al apartado cualitativo de «Fluidos a fondo».
- **Valores numéricos del PN** (cuántos bar aguanta PN10 o PN16 a cada temperatura): la norma es de pago y no encontré un documento gratuito que la reproduzca.
- **Límites de vacío y temperatura de las tuberías revestidas de PTFE** y de las de vidrio: solo información de fabricantes vista en el buscador.
- **Tipos de válvula de retención** (de clapeta, de bola, de disco) y si cierran o no de forma estanca: sin fuente leída.
- **Detalles del accidente del CSB** (cantidades, número de afectados, distancia entre bocas): la web del CSB no fue accesible.
- **Tabla completa de colores UNE 1063** (grupos de aire, gases no combustibles, líquidos no combustibles, oxígeno): en el texto de la NTP 566 la tabla llega desordenada y no pude asignar con seguridad esos colores.
- **Par de apriete de bridas**: depende del fabricante y no es tarea del operador.
