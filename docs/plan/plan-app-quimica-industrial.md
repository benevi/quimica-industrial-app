# Plan: app para aprender química industrial y trabajar en planta de API

**Para:** Victor, operador de planta en una empresa de principios activos farmacéuticos (API, *Active Pharmaceutical Ingredient*).
**Punto de partida:** sin conocimientos previos de química.
**Fecha:** 18 de noviembre de 2026 · **Estado:** borrador para revisar (todavía no hay código)

---

## 1. Qué queremos conseguir

La app tiene dos partes que se alimentan entre sí:

1. **Aula**: lecciones cortas, de cero a nivel de planta, con ejercicios y repaso.
2. **Simulador de planta**: ejecutar un lote ficticio siguiendo una hoja de producción (batch record), registrando datos como se hace en una planta GMP, con desviaciones, alarmas y revisión final según ALCOA+.

### Objetivos de aprendizaje (lo que sabrás hacer al terminar)

- Entender el vocabulario básico: átomo, molécula, mol, concentración, pH, disolvente, reacción, rendimiento, pureza.
- Hacer los cálculos que aparecen en una hoja de producción: masas, moles, equivalentes, concentraciones, diluciones, densidades, conversiones de unidades y rendimientos.
- Explicar qué ocurre en cada etapa típica de fabricación de un API (cargar, reaccionar, extraer, cristalizar, filtrar, lavar, secar, moler, envasar) y qué parámetros se controlan en cada una.
- Reconocer los riesgos de seguridad habituales (inflamables, corrosivos, reacciones exotérmicas, presión, polvo) y leer una ficha de datos de seguridad (FDS).
- Aplicar las normas GMP y las buenas prácticas de documentación: rellenar registros correctamente, corregir errores, detectar y comunicar desviaciones.
- Entender las analíticas básicas que llegan de control de calidad (HPLC, Karl Fischer, pérdida por secado, pH) y qué significan para el proceso.

---

## 2. Cómo está organizado el temario

Ocho niveles. Cada nivel tiene módulos; cada módulo, varias lecciones de 5 a 15 minutos. Cada lección sigue el mismo patrón:

> **Idea clave → Ejemplo de planta → Mini ejercicio → "¿Qué verías en la hoja de producción?"**

Ese último apartado conecta siempre la teoría con el trabajo real, que es lo que más te va a servir.

### Nivel 0. Arranque (semana 1)

| Módulo | Contenido |
|---|---|
| 0.1 Matemáticas útiles | Proporciones y regla de tres, porcentajes, notación científica, redondeo y cifras significativas, despejar una incógnita sencilla. |
| 0.2 Unidades | Sistema internacional; masa (g, kg), volumen (mL, L, m³), temperatura (°C, K), presión (bar, mbar, kPa, atm, vacío), tiempo; conversiones. Densidad: pasar de litros a kilos. |
| 0.3 Cómo es una planta de API | Áreas (almacén, producción, salas limpias, control de calidad, garantía de calidad), roles (operador, supervisor, QA, QC), qué es un lote, qué es un API frente a un medicamento terminado. |

### Nivel 1. Fundamentos de química

| Módulo | Contenido |
|---|---|
| 1.1 La materia | Estados (sólido, líquido, gas), cambios de estado, mezclas y sustancias puras, propiedades físicas (punto de fusión y ebullición, densidad, solubilidad). |
| 1.2 Átomos y tabla periódica | Protones, neutrones y electrones; elementos más comunes en farmacia (C, H, O, N, S, Cl, Na, K); cómo leer la tabla periódica; masa atómica. |
| 1.3 Enlaces y moléculas | Enlace iónico y covalente, polaridad explicada con agua y aceite, fórmulas químicas, "similar disuelve a similar". |
| 1.4 El mol | Qué es un mol, masa molar, pasar de gramos a moles y al revés. Es el concepto más importante para entender una hoja de producción. |
| 1.5 Disoluciones | Soluto y disolvente, concentración (% p/p, % p/v, g/L, mol/L), diluciones, saturación y solubilidad según la temperatura. |
| 1.6 Ácidos, bases y pH | Escala de pH, neutralización, ácidos y bases típicos en planta (HCl, NaOH, ácido acético, bicarbonato), uso del pH-metro, soluciones tampón. |

### Nivel 2. Reacciones químicas

| Módulo | Contenido |
|---|---|
| 2.1 Ecuaciones químicas | Reactivos y productos, ajuste de ecuaciones, estequiometría. |
| 2.2 Equivalentes y reactivo limitante | Por qué la hoja dice "1,2 eq" de un reactivo; reactivo en exceso y limitante; cálculo de cargas. |
| 2.3 Rendimiento y pureza | Rendimiento teórico, real y en porcentaje; impurezas; balance de materia sencillo. |
| 2.4 Energía de las reacciones | Exotérmicas y endotérmicas, calor de reacción, por qué se adiciona "lentamente manteniendo T < 25 °C", reacción descontrolada (*runaway*). |
| 2.5 Velocidad de reacción | Efecto de temperatura, concentración, agitación y catalizadores; tiempo de reacción y control en proceso (IPC). |
| 2.6 Tipos de reacción frecuentes en API | Ácido-base y formación de sales, hidrólisis, esterificación y amidación, oxidación y reducción, hidrogenación catalítica, acoplamientos. Solo a nivel de "qué hace y qué riesgos tiene". |

### Nivel 3. Química orgánica básica (lo justo para planta)

| Módulo | Contenido |
|---|---|
| 3.1 El carbono | Por qué casi todos los API son orgánicos; cómo leer una fórmula esquelética. |
| 3.2 Grupos funcionales | Alcohol, éter, cetona, aldehído, ácido carboxílico, éster, amina, amida, haluro, anillo aromático. Cómo influyen en la solubilidad y en la reactividad. |
| 3.3 Disolventes de planta | Agua, metanol, etanol, isopropanol, acetona, acetato de etilo, tolueno, diclorometano, THF, heptano. Propiedades, peligros y clasificación ICH Q3C (clase 1, 2 y 3). |
| 3.4 Isómeros y quiralidad | Qué es un enantiómero y por qué importa en un fármaco (ejemplo de la talidomida). |
| 3.5 Polimorfismo | Un mismo API puede cristalizar en formas distintas; por qué la cristalización está tan controlada. |

### Nivel 4. Laboratorio y control de calidad

| Módulo | Contenido |
|---|---|
| 4.1 Material de laboratorio | Balanzas, pipetas, probetas, matraces, buretas; calibración y verificación diaria. |
| 4.2 Toma de muestras | Muestreo representativo, etiquetado, cadena de custodia, contaminación cruzada. |
| 4.3 Análisis habituales | Valoración, pH, Karl Fischer (agua), pérdida por secado (LOD), punto de fusión, densidad, HPLC y GC (pureza, impurezas, disolventes residuales), cromatografía en capa fina (TLC). Qué mide cada uno e interpretación básica. |
| 4.4 Especificaciones | Qué es una especificación, resultado dentro o fuera (OOS, OOT), qué hacer cuando un IPC sale fuera. |
| 4.5 Buenas prácticas de laboratorio | Cuaderno, identificación de reactivos, caducidades, trazabilidad. |

### Nivel 5. Operaciones unitarias en planta de API

Este es el núcleo para tu puesto. Cada módulo explica el **objetivo**, el **equipo**, los **parámetros críticos**, los **riesgos** y **cómo aparece en la hoja de producción**.

| Módulo | Equipo típico | Parámetros que vigilarás |
|---|---|---|
| 5.1 Equipos y servicios | Reactores de acero inoxidable y vidrio (glass-lined), camisas, agitadores, condensadores, bombas, vacío, nitrógeno, agua de refrigeración, salmuera, vapor | Presión, temperatura de camisa y masa, estado de servicios |
| 5.2 Carga de materiales | Básculas, bocas de hombre, cargas por vacío, contenedores IBC, aisladores | Identidad, peso o volumen, orden de carga, inertización |
| 5.3 Inertización y seguridad | Nitrógeno, medición de oxígeno, puesta a tierra | O₂ residual, sobrepresión |
| 5.4 Reacción | Reactor con control de temperatura | T, tiempo, velocidad de adición, agitación, IPC |
| 5.5 Extracción y separación de fases | Reactor y decantación, visor | Fases, pH, tiempo de decantación, interfase |
| 5.6 Destilación y concentración | Reactor con condensador y vacío | Volumen, T, vacío, cambio de disolvente (*solvent swap*) |
| 5.7 Cristalización | Reactor con rampa de enfriamiento, siembra | Perfil de T, velocidad de enfriamiento, siembra, envejecimiento |
| 5.8 Filtración y lavado | Filtro Nutsche, filtro-secador agitado, centrífuga | Presión diferencial, volumen de lavado, conductividad o pH de aguas madre |
| 5.9 Secado | Secador de bandejas, secador cónico o de paletas, al vacío | T, vacío, tiempo, LOD o KF como punto final |
| 5.10 Molienda y tamizado | Molino, tamiz | Tamaño de partícula, polvo, ATEX |
| 5.11 Envasado y etiquetado | Bolsas dobles, bidones, etiquetas | Peso neto, identificación, precinto |
| 5.12 Limpieza de equipos | Limpieza CIP y manual, hisopos y aguas de aclarado | Estado del equipo (sucio, limpio, en uso), caducidad de limpieza |

### Nivel 6. Seguridad, salud y medio ambiente

- Pictogramas y frases H/P del sistema GHS/CLP; cómo leer una FDS.
- Equipos de protección individual (EPI): guantes, gafas, pantallas, respiradores, trajes.
- Inflamabilidad: punto de inflamación, atmósferas explosivas (ATEX), electricidad estática y puesta a tierra.
- Sustancias tóxicas, corrosivas y potentes (OEL, OEB); contención.
- Permisos de trabajo, bloqueo y etiquetado (LOTO), espacios confinados.
- Derrames, emergencias y residuos.

### Nivel 7. GMP y calidad farmacéutica

Detallado en la sección 3.

---

## 3. GMP, ALCOA+ y buenas prácticas de documentación

### 3.1 Marco normativo (explicado de forma sencilla)

| Norma | De qué trata |
|---|---|
| **ICH Q7** (y EU GMP Parte II) | La "biblia" de GMP para fabricar API. Lo más importante para tu puesto. |
| **EU GMP Anexo 11** y **21 CFR Part 11** (EE. UU.) | Sistemas informatizados y registros y firmas electrónicas. |
| **ICH Q9** | Gestión de riesgos de calidad. |
| **ICH Q10** | Sistema de calidad farmacéutica. |
| **Guías de integridad de datos** (MHRA, PIC/S PI 041, FDA) | De aquí viene ALCOA+. |

### 3.2 Conceptos GMP para un operador

- Por qué existen las GMP: el paciente no puede comprobar la calidad; la garantizamos con el proceso y los registros.
- Procedimientos normalizados de trabajo (PNT o SOP): se siguen tal cual, y si no se puede, se para y se avisa.
- Formación y cualificación: solo haces lo que tienes formado y firmado.
- Identificación y estado: materiales en cuarentena, aprobados o rechazados; equipos limpios, sucios o en uso; etiquetas.
- Trazabilidad del lote: materia prima → lote → envase.
- Higiene y vestimenta, control de contaminación cruzada.
- Cualificación de equipos (IQ, OQ, PQ) y validación de procesos y limpieza, a nivel conceptual.
- **Desviaciones**: qué es, cuándo se abre, quién la gestiona.
- **CAPA** (acciones correctivas y preventivas), **control de cambios**, **investigaciones**, **OOS**.
- Liberación del lote por QA: por qué la revisión del batch record es tan estricta.

### 3.3 ALCOA+ con ejemplos de planta

| Principio | Significado | Bien hecho | Mal hecho |
|---|---|---|---|
| **A**tribuible | Se sabe quién lo hizo y cuándo | Firma o iniciales y fecha | Dato sin firmar |
| **L**egible | Se puede leer siempre | Bolígrafo indeleble, letra clara | Lápiz, típex, letra ilegible |
| **C**ontemporáneo | Se registra en el momento | Anotar la temperatura al leerla | Rellenar todo al final del turno |
| **O**riginal | Es el primer registro | Escribir directamente en la hoja | Apuntar en un guante o papel y copiarlo luego |
| **A**preciso (Accurate) | Refleja la realidad | Copiar el valor exacto de la báscula | Redondear "para que cuadre" |
| **C**ompleto | No falta nada | Casillas vacías tachadas con "N/A" y firmadas | Huecos en blanco |
| **C**onsistente | Secuencia lógica de fechas y horas | Horas en orden | Una etapa que termina antes de empezar |
| **D**uradero (Enduring) | Se conserva | Registro archivado | Notas en post-it |
| **D**isponible (Available) | Se puede consultar cuando se necesite | Archivo localizable | Hoja perdida |

### 3.4 Buenas prácticas de documentación (GDP)

- Escribir en tinta indeleble, nunca lápiz ni típex.
- **Cómo corregir un error**: una sola raya que deje leer el dato original, escribir el valor correcto al lado, iniciales, fecha y motivo si el procedimiento lo pide.
- Nunca firmar por otra persona ni antes de hacer la tarea.
- Casillas no aplicables: "N/A" con iniciales y fecha.
- Formato de fechas y horas definido por la empresa.
- Verificación por un segundo operador ("verificado por") en pasos críticos como pesadas o cargas.
- Registros electrónicos: usuario propio, contraseña personal, audit trail, no compartir sesiones.

---

## 4. Diseño del simulador de procesos

### 4.1 Idea general

El usuario recibe una **orden de fabricación** de un producto ficticio y la ejecuta paso a paso en una planta virtual. Cada paso pide datos, como en un batch record real. El simulador calcula cómo evoluciona el proceso (temperatura, conversión, pureza, humedad…) y reacciona a las decisiones del usuario. Al final, un "revisor de QA" evalúa el lote y la documentación.

Se usarán **procesos ficticios pero realistas**, inspirados en procesos públicos de libro (por ejemplo, una síntesis tipo paracetamol o ácido acetilsalicílico simplificada), para no reproducir ningún procedimiento confidencial de tu empresa.

### 4.2 Estructura de una hoja de producción simulada

1. **Cabecera**: producto, código, número de lote, tamaño de lote, versión del documento, fecha de emisión, aprobado por.
2. **Verificaciones previas**: limpieza y liberación de sala y equipo, calibración de báscula, estado de servicios, EPI, formación.
3. **Lista de materiales**: código, nombre, lote, cantidad teórica, cantidad real, quién pesa, quién verifica.
4. **Pasos de proceso**, cada uno con: instrucción, parámetro objetivo y rango, valor real, hora de inicio y fin, firma, verificación y comentarios.
5. **Controles en proceso (IPC)**: muestra, análisis, especificación, resultado, decisión.
6. **Rendimiento y balance**: cálculo automático frente a lo esperado.
7. **Registro de desviaciones** del lote.
8. **Revisión y cierre**: firma de producción, revisión de QA, decisión de liberación.

### 4.3 Flujo de un lote

```
Recibir orden → Verificaciones previas → Pesada y dispensación
→ Carga al reactor → Inertización → Reacción (con IPC)
→ Extracción/lavados → Concentración → Cristalización
→ Filtración y lavado → Secado (con LOD/KF) → Envasado
→ Limpieza del equipo → Cierre del batch record → Revisión QA
```

En cada etapa, un panel muestra el **equipo virtual** (reactor con termómetro, manómetro, agitador, nivel) con gráficas en tiempo real, y a su lado la **hoja de producción** que hay que rellenar.

### 4.4 Modelo del proceso (simplificado)

No hace falta un simulador de ingeniería. Basta con modelos sencillos que enseñen causa y efecto:

- **Balance de materia**: cargas, moles, equivalentes, rendimiento.
- **Temperatura**: la camisa calienta o enfría con cierta inercia; las adiciones exotérmicas suben la temperatura según la velocidad de adición.
- **Conversión**: avanza con el tiempo, más rápido a más temperatura; el IPC devuelve el % de reactivo restante.
- **Impurezas**: aumentan si la temperatura se sale de rango o el tiempo se alarga.
- **Cristalización**: el rendimiento y el tamaño de cristal dependen del perfil de enfriamiento y de la siembra.
- **Secado**: la humedad baja con el tiempo según T y vacío; el LOD indica si se alcanza la especificación.

### 4.5 Eventos y desviaciones

El simulador puede introducir, al azar o por escenario, situaciones como:

- Báscula fuera de calibración o material con lote caducado.
- Temperatura que se sale de rango por fallo de refrigeración.
- IPC fuera de especificación.
- Fuga o caída de vacío, fallo del agitador, alarma de O₂.
- Error de registro (dato olvidado, hora incoherente) que el usuario debe corregir con buenas prácticas.

Ante cada evento, el usuario debe decidir: **parar, avisar al supervisor, registrar y abrir desviación**. El simulador puntúa si la reacción fue correcta (seguridad primero, no improvisar, documentar).

### 4.6 Registros, audit trail y revisión QA

- Cada dato queda guardado con usuario, fecha, hora y valor anterior si se corrige (**audit trail** simulado).
- Las correcciones exigen motivo.
- Firma electrónica simulada en pasos críticos y "verificado por" (un segundo usuario ficticio o el propio usuario con advertencia).
- Al cerrar el lote, un **revisor automático** comprueba ALCOA+: campos vacíos, firmas que faltan, horas incoherentes, valores fuera de rango sin desviación, correcciones sin motivo. Devuelve un informe con hallazgos clasificados como crítico, mayor o menor.

### 4.7 Modos de juego

- **Guiado**: con explicaciones en cada paso.
- **Práctica**: sin ayudas, con eventos aleatorios.
- **Auditoría**: se presenta un batch record ya relleno con errores escondidos y hay que encontrarlos.
- **Turno**: un lote completo con tiempo acelerado y relevo de turno (pasar información a otra persona).

---

## 5. Funcionalidades de la app

**Aprendizaje**
- Itinerario por niveles con progreso visible y desbloqueo.
- Lecciones cortas con diagramas, animaciones simples y ejemplos de planta.
- Ejercicios: test, cálculos con respuesta numérica, arrastrar y ordenar pasos, emparejar pictogramas.
- Repaso espaciado (tarjetas tipo flashcard) para vocabulario y fórmulas.
- Glosario español-inglés (mucha documentación técnica está en inglés).

**Herramientas de planta**
- Calculadoras: gramos ↔ moles, equivalentes, diluciones, densidad, rendimiento, conversiones de presión y temperatura.
- Fichas de disolventes y reactivos comunes con riesgos y EPI.
- Chuleta de ALCOA+ y de cómo corregir un registro.

**Simulador**
- Procesos de ejemplo (empezar con uno y añadir más).
- Hoja de producción interactiva, equipo virtual con gráficas, eventos, informe de revisión QA.

**Asistente con IA (opcional, fase posterior)**
- Tutor que responde dudas en español usando el contenido de la app y explica tus errores en el simulador.

**General**
- Funciona en móvil y ordenador; progreso guardado.
- Modo sin conexión para repasar en descansos.

---

## 6. Stack técnico propuesto (sencillo)

| Pieza | Propuesta | Por qué |
|---|---|---|
| Interfaz web | **Next.js + React + TypeScript** | Estándar, mucha documentación, sirve para web y móvil. |
| Estilos y componentes | **Tailwind CSS + shadcn/ui** | Rápido de maquetar y con aspecto limpio. |
| Contenido de lecciones | **Archivos MDX** en el repositorio | Escribir lecciones como texto con componentes interactivos dentro. |
| Gráficas del simulador | **Recharts** | Gráficas de temperatura, presión y conversión sencillas. |
| Motor del simulador | **TypeScript puro** (paso de tiempo, ecuaciones simples) en el navegador | Sin servidor, fácil de probar. |
| Guardado de progreso | **Fase 1:** almacenamiento del navegador. **Fase 2:** **Supabase** (base de datos y login) | Empezar sin cuentas y añadirlas cuando haga falta. |
| Despliegue | **Vercel** | Publicar con un clic desde GitHub, gratis para uso personal. |
| IA (opcional) | API de Claude | Tutor en español. |

Alternativa aún más simple para un primer prototipo: una sola página con React (Vite) sin base de datos.

---

## 7. Fases de construcción

| Fase | Duración orientativa | Entrega |
|---|---|---|
| **0. Preparación** | 1 semana | Repositorio en GitHub, proyecto base, estructura de lecciones, diseño visual mínimo. |
| **1. Aula básica** | 2–3 semanas | Niveles 0 y 1 completos, ejercicios tipo test y numéricos, progreso local, calculadoras básicas. |
| **2. Química aplicada** | 2–3 semanas | Niveles 2 y 3, glosario, flashcards. |
| **3. Simulador v1** | 3–4 semanas | Un proceso completo (reacción → cristalización → filtración → secado), hoja de producción interactiva, modelo simple, IPC. |
| **4. GMP y ALCOA+** | 2 semanas | Nivel 7, audit trail, correcciones con motivo, revisor QA automático, modo auditoría. |
| **5. Desviaciones y eventos** | 2 semanas | Eventos aleatorios, gestión de desviaciones, modo práctica. |
| **6. Laboratorio, operaciones y seguridad** | 3 semanas | Niveles 4, 5 y 6 completos, fichas de disolventes y pictogramas. |
| **7. Cuentas y tutor IA** | 2 semanas | Login, progreso en la nube, tutor con IA. |

Prioridad recomendada: como empiezas ya en planta, conviene adelantar **ALCOA+ y buenas prácticas de documentación (nivel 7)** y las **operaciones unitarias (nivel 5)** como "kit de supervivencia" en las primeras semanas, en paralelo con los fundamentos.

---

## 8. Cómo usarlo mientras empiezas a trabajar

- 20–30 minutos al día: una o dos lecciones y 10 tarjetas de repaso.
- Cada semana, anota en la app las palabras y equipos nuevos que veas en planta para crear lecciones a tu medida.
- **Importante sobre confidencialidad**: no subas a la app procedimientos, hojas de producción ni datos reales de tu empresa. Usa siempre ejemplos genéricos o ficticios.
- La app complementa, pero no sustituye, la formación oficial y los procedimientos de tu empresa: en planta manda siempre el SOP vigente.

---

## 9. Decisiones pendientes para Victor

1. ¿Empezamos por el **Aula** o por un **prototipo del simulador** primero?
2. ¿Quieres que la app esté solo en español o con términos en inglés al lado?
3. ¿Tienes cuenta de GitHub para guardar el código y Vercel para publicarlo? (Antes de programar nada te lo confirmo.)
4. ¿Sabes ya qué tipo de equipos o etapas tiene tu planta (reactores, centrífugas, secadores…)? Así priorizamos esos módulos.
