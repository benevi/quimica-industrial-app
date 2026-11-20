# Plan: ampliar el simulador de lotes GMP

**Para:** Victor · **Fecha:** 18 de noviembre de 2026 · **Estado:** borrador para aprobar (no se ha escrito código para este plan)

> **Versión 3.** Parte del simulador que ya está en la app (sección **Simulador**, `/simulador`) y lo amplía, sin duplicarlo. Victor ha dicho que el actual es **poco intuitivo y poco gráfico**, así que lo primero es **rediseñar la parte visual** (sección 2). Los bocetos están en [bocetos-simulador/](bocetos-simulador/).

Todo es **ficticio**: producto, receta, equipos y números. No se usa ningún documento de tu empresa. En planta manda siempre el procedimiento vigente.

---

## 1. Lo que ya tienes (simulador actual)

Producto didáctico **FX-101**: acetilación de 4-aminofenol con anhídrido acético en agua, una versión de libro muy simplificada de la síntesis del paracetamol. Orden FX-101/26-0147.

| Ya funciona | Detalle |
|---|---|
| **10 etapas** | Verificaciones previas · Pesada y dispensación · Carga e inertización · Reacción e IPC · Filtración clarificante · Cristalización · Centrifugación y lavado · Secado · Descarga y envasado · Cierre y revisión QA |
| **Equipos** | Reactor R-101 (dibujo con temperatura de masa y camisa, gráfica de tendencia, adición, agitador, enclavamiento), filtro de cartucho F-301, cristalizador R-102, centrífuga C-201, secadero de vacío SD-301, báscula |
| **Hoja de producción** | Registrar dato con hora automática, correcciones con valor tachado y motivo, firma por etapa, verificación de pesadas por segunda persona |
| **Audit trail** | Quién, qué y cuándo de cada acción |
| **2 escenarios** | Lote normal y lote con incidencias |
| **4 incidencias** | Báscula fuera de verificación, fallo de refrigeración, filtro colmatado, caída de vacío en el secadero |
| **Desviaciones** | Avisar al supervisor (responde con instrucciones) y abrir desviación |
| **Revisor QA** | Hallazgos crítico / mayor / menor por áreas (seguridad, proceso, documentación ALCOA+, calidad), cada uno con enlace a su lección; resultados de laboratorio; decisión: liberable, pendiente de desviaciones o rechazado; puntuación |
| **Guardado** | En el navegador; se puede dejar un lote a medias |

Es decir: el "simulador mínimo útil" que proponía la versión 1 (hoja + reactor + resto de equipos + revisor QA) **ya existe**. Lo que falta son los modos de práctica, más variedad de incidencias, la conexión con el ERP y el Aula, y más procesos.

---

## 2. Prioridad 1: rediseño visual

El motor del simulador actual (cálculos, incidencias, revisor QA) se mantiene. Lo que cambia es **cómo se ve y cómo se maneja**: menos texto y botones sueltos, y más planta, indicadores y una guía clara de qué toca hacer.

### 2.1 Tres pantallas

| Boceto | Pantalla | Qué tiene |
|---|---|---|
| [1-vista-de-planta.png](bocetos-simulador/1-vista-de-planta.png) | **Vista de planta** (P&ID simplificado) | Todos los equipos unidos por tuberías, con las líneas de servicios (nitrógeno, glicol, vapor, vacío). El equipo en uso brilla y lleva "ESTÁS AQUÍ"; los acabados, ✓ verde. El líquido se ve dentro de los equipos, el agitador gira y las tuberías con flujo se mueven. Al pasar el ratón por un equipo: qué es, su estado (limpio, en uso, sucio) y la lección. Clic = abrir su panel. |
| [2-panel-reactor.png](bocetos-simulador/2-panel-reactor.png) | **Panel del equipo (tipo SCADA)** | Dibujo grande del equipo con sus lecturas (TI-101, camisa, nivel), indicadores de agitador, presión y oxígeno, mandos (deslizador de la válvula de adición, consigna de temperatura, botones de parar, pedir IPC y avisar), **gráfica en tiempo real** con la franja de límite en rojo, avisos que te anticipan el problema y registro de alarmas. A la derecha, la hoja de producción de esa etapa. |
| [3-pesada-y-hoja.png](bocetos-simulador/3-pesada-y-hoja.png) | **Tareas manuales** (pesada, muestreo, envasado) | Escenas sencillas: eliges el envase leyendo su etiqueta (APROBADO en verde, CUARENTENA en amarillo), la báscula muestra el peso con un visor grande y te dice si estás en tolerancia. Abajo, el audit trail se va escribiendo solo. |

### 2.2 Lo común a todas las pantallas

- **Barra de etapas** arriba (1 a 10): hechas en verde, la actual en azul. Siempre sabes dónde estás.
- **Recuadro azul "qué hacer ahora"**: una sola instrucción corta, con el número de paso y un enlace a la lección. En modo guiado te lleva de la mano; en modo práctica se puede ocultar.
- **Hoja de producción con aspecto de papel** al lado, con la casilla que toca **resaltada en amarillo**, la especificación visible y los botones Registrar, Corregir, Pedir verificación, N/A y Firmar.
- **Colores con significado fijo**: azul = agua o disolución, naranja = caliente, violeta = nitrógeno, cian = frío; verde = correcto, amarillo = aviso, rojo = alarma.
- **Reloj de planta** y velocidad (×30, pausa) siempre visibles.
- Pensado para **pantalla de ordenador**, que es donde usas la app.

### 2.3 Paneles para cada equipo

Con el mismo estilo que el reactor: **filtro** (presiones antes y después y diferencia, cartucho que se ensucia), **cristalizador** (rampa de enfriamiento dibujada, aparición de cristales al sembrar), **centrífuga** (cesta girando, torta que crece, aguas madre saliendo), **secadero** (vacío, temperatura y curva de LOD bajando) y **envasado** (bidón, etiqueta y báscula).

### 2.4 Estilo realista, basado en las fotos de Victor

Victor ha enviado fotos de una instalación real como referencia. El boceto [4-planta-realista.png](bocetos-simulador/4-planta-realista.png) aplica ese aspecto a la vista de planta: reactor **esférico de vidrio** con brida y abrazaderas, depósito de adición de vidrio **graduado**, estructura de **tubo galvanizado**, **condensador** horizontal aislado arriba, válvula automática naranja en la adición, líneas de **vacío** y de **lavador de gases (scrubber)** en PP beige, columna lavadora de vidrio, **filtro-secador** azul con agitador, **filtro a presión** de acero inoxidable con cierres y un **panel de servicios** (aire comprimido, nitrógeno, agua de red, agua caliente de ida y vuelta, vacío) con código de colores. Fondo claro, como la sala. Los datos en vivo aparecen como etiquetas oscuras encima del equipo.

Los nombres de equipo (R-101, D-101, E-101, SC-101, FS-201, F-301) y el proceso son **inventados**: no se copia ningún código ni rótulo de las fotos.

### 2.5 Cómo se construye

Dibujos en SVG dentro de React (como el reactor actual, pero más completos) y animaciones con CSS, sin librerías pesadas. Así se ve fluido en el ordenador y el motor actual no cambia.

---

## 3. Después del rediseño: qué más añadiríamos

### 3.1 Modo guiado

Para tu primer lote. En cada etapa, un recuadro explica **qué estás haciendo y por qué** en lenguaje sencillo (por ejemplo, "inertizamos con nitrógeno para que no haya oxígeno que, junto con vapores inflamables, pueda arder"), con enlace a la lección. Sin incidencias. El modo actual pasa a llamarse **Práctica**.

### 3.2 Más incidencias y escenarios elegibles

Pasar de 4 a unas 15 incidencias, y poder **elegir** cuál practicar o dejar que salgan **al azar**.

| Tipo | Nuevas incidencias |
|---|---|
| Materiales | Lote de materia prima en cuarentena o caducado; etiqueta que no coincide con la orden |
| Equipos | Agitador que se para; vibración alta en la centrífuga; sonda de temperatura con lectura incoherente |
| Seguridad | Oxígeno alto tras la inertización; pérdida de puesta a tierra; fuga en una junta |
| Calidad | IPC fuera de especificación (hay que prolongar y repetir, no "dar por bueno"); pérdida por secado (LOD) que no baja |
| Documentación | Hora incoherente, casilla olvidada, firma de otro operador en tu etapa |

En cada caso el simulador valora si **paraste en seguro, avisaste, registraste y abriste desviación** en vez de improvisar.

### 3.3 Modo auditoría

Te damos una **hoja de producción ya rellena** por "otro operador" con errores escondidos (por ejemplo, 8 por hoja): un dato pasado a limpio, una corrección con típex simulado, una firma antes de hacer la tarea, un valor fuera de rango sin desviación, horas que no cuadran… Tienes que encontrarlos y clasificarlos (crítico, mayor, menor). Empezaríamos con 3 hojas distintas. Es el ejercicio más parecido a lo que hace QA y lo que más entrena el ojo para ALCOA+.

### 3.4 Tres notas en lugar de una

Separar la puntuación actual en **Seguridad**, **Proceso** y **Documentación**, para que veas dónde fallas. Al final del lote, sugerir las 2 o 3 lecciones de tus fallos.

### 3.5 Etapas que faltan

- **Limpieza del equipo** al final: marcar el reactor y la centrífuga como "sucio", registrar la limpieza y su caducidad (lección `limpieza-de-equipos`).
- **Parte de relevo** (modo turno): a mitad de lote escribes el relevo para el siguiente turno; en otra partida retomas un lote "de otro operador" leyendo su parte.

### 3.6 Conexión con el ERP (sección `/sap`)

Ahora el ERP y el simulador funcionan por separado y con productos distintos (el ERP fabrica **API-X**, el simulador **FX-101**). Propuesta:

1. Dar de alta **FX-101** en el ERP con su receta y sus materias primas, y mantener API-X para las misiones que ya existen.
2. En el ERP **creas y liberas la orden**; en el simulador **abres esa orden**.
3. En la **pesada** solo puedes usar lotes en stock **libre** del ERP; la pesada hace la **salida de material** a la orden.
4. Al terminar cada fase se **notifica** en el ERP.
5. Al envasar se hace la **entrada del producto**, que queda en stock de calidad y crea el **lote de inspección**.
6. Los resultados de laboratorio de ese lote salen de **cómo fue tu lote** en el simulador.
7. Con esos resultados y el informe de QA tomas la **decisión de empleo** en el ERP.

Será opcional: el simulador y el ERP seguirán funcionando cada uno por su cuenta.

### 3.7 Conexión con el Aula y las certificaciones

- Botón **"Practicar en el simulador"** en las lecciones de operaciones de planta y GMP (centrífuga, secaderos, filtros, cristalización, carga e inertización, calor de reacción, ALCOA+, desviaciones…), que abre el escenario correspondiente.
- **Misiones** nuevas en Certificaciones, por ejemplo: "completa un lote sin hallazgos críticos" o "encuentra todos los errores de la hoja de auditoría 1".

### 3.8 Segundo proceso: filtro-secador

Tu planta tiene también filtros, así que un segundo producto ficticio usaría un **filtro-secador agitado** (tipo Nutsche) en lugar de centrífuga + secadero, con una etapa de **extracción y separación de fases** que el primer proceso no tiene.

### 3.9 Pruebas automáticas del motor

Ahora el motor no tiene pruebas propias. Añadiríamos pruebas del tipo "si la adición es el doble de rápida, salta la alarma de temperatura" o "una corrección sin motivo genera un hallazgo", para que las ampliaciones no rompan lo que ya funciona.

---

## 4. Fases de construcción y qué verás en cada una

Cada fase es un PR al repositorio que se verifica y se fusiona. Al terminar cada una puedes abrirla en tu ordenador.

| Fase | Qué se construye | Qué verás tú |
|---|---|---|
| **V1. Vista de planta y barra de etapas** | Pantalla de planta (boceto 1), barra de etapas, recuadro "qué hacer ahora", hoja con aspecto de papel y casilla resaltada | El simulador ya se ve como una planta y siempre sabes qué toca. |
| **V2. Panel del reactor** | Panel SCADA del reactor con gráfica en tiempo real, avisos y alarmas (boceto 2) | La reacción se maneja con mandos y ves la temperatura moverse. |
| **V3. Resto de equipos y tareas manuales** | Paneles de filtro, cristalizador, centrífuga, secadero y envasado; escenas de pesada (boceto 3) | Todo el lote es visual de principio a fin. |
| **A. Base sólida** | Pruebas del motor (3.9), tres notas (3.4), recomendación de lecciones, etapa de limpieza (3.5) | El informe final separa seguridad, proceso y documentación, y te dice qué repasar. El lote termina con la limpieza del equipo. |
| **B. Guiado y práctica** | Modo guiado (3.1) y catálogo de incidencias elegibles o al azar (3.2) | Un selector al empezar: Guiado, Práctica (elige incidencia o al azar). |
| **C. Auditoría** | Modo auditoría con 3 hojas (3.3) | Nuevo modo "Auditoría": cazar errores en hojas de otros. |
| **D. Aula y certificaciones** | Botones "Practicar" en las lecciones y misiones nuevas (3.7) | Desde una lección saltas directamente al escenario que la practica. |
| **E. ERP** | FX-101 en el ERP y ciclo completo orden → lote → laboratorio → decisión de empleo (3.6) | Fabricas el lote de principio a fin como en una planta con ERP y MES conectados. |
| **F. Ampliaciones** | Modo turno con relevo (3.5) y segundo proceso con filtro-secador (3.8) | Más variedad para seguir practicando. |

Orden recomendado: **V1 → V2 → V3** primero (rediseño visual) y después A → F. Cada fase V se te enseña con capturas antes de fusionarla. Con A, B y C ya practicas lo más útil para tu día a día: reaccionar bien ante incidencias y documentar según ALCOA+.

---

## 5. Cómo se garantiza que es correcto

- Rangos, límites y reglas se contrastan con fuentes de referencia (ICH Q7, guías de integridad de datos MHRA y PIC/S PI 041, EU GMP Anexo 11, textos de operaciones unitarias), igual que las lecciones.
- Los números del proceso son inventados y la pantalla lo dice; lo que debe ser exacto son los **principios** (por qué se inertiza, por qué se siembra, cómo se corrige un registro, cuándo se abre una desviación).
- Las pruebas automáticas del motor comprueban que cada causa produce su efecto.

---

## 6. Decisiones para Victor

Solo hace falta que digas si apruebas el plan. Si no dices nada en contra, se aplica lo recomendado:

1. **¿Qué estilo prefieres?** Recomendado: vista de planta **realista y clara** (boceto 4) y paneles de equipo con indicadores tipo sala de control (boceto 2), con la hoja en papel al lado.
2. **Orden: V1 → V3 y luego A → F** (recomendado).
3. **Dar de alta FX-101 en el ERP** (recomendado) en lugar de cambiar el simulador a API-X, para no tocar lo que ya funciona en el simulador.
