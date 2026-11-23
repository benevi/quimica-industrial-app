# Edición de operador

Versión aparte de la app para formar a operadores de planta de principios activos (API). Está pensada para presentarla a la
empresa de Victor y, si les gusta, para las nuevas incorporaciones. Empezó el 23/11/2026, con el ok de Victor a esta propuesta.

## Qué lleva y qué no

- **Lleva**: 54 lecciones básicas (unas 14 horas) en 12 etapas ordenadas como el proceso de planta, 5 lecciones de ampliación de
  los equipos (unas 2,7 horas), una página por etapa (dónde encaja en el proceso, qué haces tú, qué registras en la hoja,
  fotos y lecciones), glosario, tarjetas de repaso, fichas de seguridad de práctica y calculadoras.
- **No lleva**: simuladores (lote, reactor, Nutsche, auditoría), simulador ERP tipo SAP, certificaciones, banco de problemas,
  buscador ni nube. El progreso se guarda solo en el navegador y se puede descargar y cargar en un archivo (`/progreso`).
- **Imágenes**: solo fotos y esquemas de Wikimedia Commons (dominio público o Creative Commons sin restricción comercial),
  pictogramas GHS de la CEPE/ONU y señales ISO 7010, con sus créditos en `/creditos`.
- **Sin vídeos**: los de la edición completa son de YouTube con su licencia estándar, no libre.
- **Sin simulaciones PhET**: el propio archivo de cada simulación dice «CC BY-NC 4.0» y «COMMERCIAL USE REQUIRES A COMMERCIAL
  LICENSE AGREEMENT FROM THE UNIVERSITY OF COLORADO BOULDER» (leído en `density_es.html` el 23/11/2026). No está claro si la
  formación interna de una empresa cuenta como uso comercial, así que no se incluyen.
- **Confidencialidad**: nada de la empresa de Victor. Procesos, productos, recetas y códigos de equipo son ficticios, como en
  la edición completa. Tampoco sale el nombre de Victor.

## Cómo está separada

Es una segunda app Next.js en la carpeta `operador/` del mismo repositorio. Comparte las lecciones (`src/content`) y los
componentes de `src/components`. Así, una corrección en una lección llega sola a las dos ediciones.

- `operador/src/edicion.ts`: el índice (etapas, sus textos, imágenes, lecciones y ampliación). Es lo que se edita para cambiar
  la formación.
- `operador/src/ajustes.ts`: frases de las lecciones que hablan de lo que esta edición no tiene (niveles del temario,
  simuladores, lecciones que no están) y su sustituto. Cada frase a cambiar tiene que aparecer una sola vez; si cambia el texto
  original, `check:operador` avisa.
- `operador/src/lecciones.ts`: la lección con sus ajustes y sus imágenes (sin vídeos ni simulaciones).
- `operador/src/app/`: páginas propias (Hoy, etapa, lección, glosario, tarjetas, progreso, créditos). Fichas de seguridad y
  calculadoras reutilizan las páginas de `src/app`.
- `operador/public/` no va en git: `scripts/operador-media.mjs` copia antes de cada `dev:operador` y `build:operador` solo
  las imágenes que se usan.
- `src/lib/edicion.ts`: la variable `NEXT_PUBLIC_EDICION=operador`, solo para detalles de componentes compartidos (el enlace
  al repaso de fallos de las fichas de seguridad).

Para compartir sin arrastrar lo demás, varios componentes se separaron en una parte común y otra de la edición completa:

| Común | Solo edición completa |
|---|---|
| `shell/SidebarFrame` | `shell/Sidebar` (buscador y nube) |
| `flashcards/FlashcardsBase` | `flashcards/Flashcards` (todas las tarjetas y los fallos de examen) |
| `QuizCore` | `Quiz` (siguiente lección del temario o de la ruta) |
| `LessonImages` | `LessonMedia` (vídeos y simulaciones PhET) |
| `certs/fdsPool` | `certs/pool` (bancos de las certificaciones) |

## Comprobaciones

`npm run check:operador`, también en el CI:

- Cada lección del índice existe y no se repite. Cada etapa tiene imagen.
- Cada ajuste encuentra su frase una sola vez.
- En las lecciones ya ajustadas y en sus tarjetas no queda nada de simuladores, SAP, certificaciones, PhET, vídeos,
  niveles del temario ni nombres personales. Los enlaces y las lecciones citadas por su título están dentro de la edición.
- Las imágenes existen y su licencia está entre las libres.
- El código de `operador/`, también a través de `src/`, no llega a simuladores, SAP, certificaciones, banco de problemas,
  nube, buscador ni vídeos.

Además, `npm run build:operador` va en el CI.

## Comandos

```bash
npm run dev:operador     # http://localhost:3001
npm run build:operador
npm run start:operador   # sirve la build en el puerto 3001
npm run check:operador
```

Se publica en Vercel (ok de Victor del 23/11/2026) como un proyecto aparte, `formacion-operadores`, conectado al mismo
repositorio: carpeta raíz `operador`, instalación `cd .. && npm ci` y build `cd .. && npm run build:operador`.
`operador/package.json` solo existe para que Vercel reconozca la app de esa carpeta; sus versiones de Next y React
tienen que ser las de la raíz (lo comprueba `check:operador`).

## Pendiente

- Si la empresa aporta y autoriza por escrito sus procedimientos, se podrían adaptar las etapas. Hasta entonces, todo
  ficticio.
- Al añadir lecciones clave para el turno a la edición completa, valorar sumarlas aquí (en `edicion.ts`).

## Índice

### 1. Bienvenida: la planta y cómo estudiar (2 lecciones, 24 min)

- Qué es la química y cómo se estudia en esta aula (`empieza-aqui`, 12 min)
- Cómo es una planta de API (`planta-de-api`, 12 min)

### 2. Seguridad antes de entrar (6 lecciones, 93 min)

- Pictogramas, frases H y P y fichas de datos de seguridad (`pictogramas-y-fds`, 15 min)
- Equipos de protección individual (`epi`, 15 min)
- Incendio, explosión y zonas ATEX (`incendio-y-atex`, 18 min)
- Exposición a productos y contención (`exposicion-y-contencion`, 15 min)
- Permisos de trabajo y consignación (`permisos-y-consignacion`, 15 min)
- Emergencias, vertidos y residuos (`emergencias-y-residuos`, 15 min)

### 3. GMP y hoja de producción (6 lecciones, 132 min)

- Qué son las GMP y la guía ICH Q7 (`gmp-e-ich-q7`, 15 min)
- ALCOA+: datos en los que se puede confiar (`alcoa-plus`, 15 min)
- Buenas prácticas de documentación (`buenas-practicas-documentacion`, 15 min)
- La hoja de producción a fondo: de la instrucción maestra a la revisión del lote (`hoja-de-produccion-a-fondo`, 34 min)
- Desviaciones e investigaciones (`desviaciones`, 15 min)
- El turno y el factor humano a fondo: relevo, comunicación y cómo se evitan los errores (`turno-y-factor-humano-a-fondo`, 38 min)

### 4. La química justa y las cuentas de la hoja (11 lecciones, 160 min)

- La materia y sus estados (`la-materia`, 12 min)
- Matemáticas útiles para planta (`matematicas-utiles`, 12 min)
- Unidades y conversiones (`unidades-y-conversiones`, 15 min)
- Densidad: de litros a kilos (`densidad`, 10 min)
- Átomos y tabla periódica (`atomos-y-tabla-periodica`, 15 min)
- El mol: contar moléculas pesando (`el-mol`, 18 min)
- Disoluciones y concentración (`disoluciones`, 15 min)
- Ácidos, bases y pH (`acidos-bases-ph`, 15 min)
- Ecuaciones químicas y estequiometría (`ecuaciones-y-estequiometria`, 18 min)
- Rendimiento, pureza y balance de materia (`rendimiento-y-balance`, 12 min)
- Disolventes orgánicos y disolventes residuales (`disolventes-organicos`, 18 min)

### 5. Materiales que entran y cómo se mueven (4 lecciones, 60 min)

- Recepción de materiales y estados de calidad (`recepcion-y-cuarentena`, 15 min)
- Manejo de sólidos y balance de materia (`solidos-y-balances`, 15 min)
- Tuberías, válvulas y conexiones (`tuberias-y-valvulas`, 15 min)
- Bombas (`bombas`, 15 min)

### 6. Reactores (6 lecciones, 96 min)

- El reactor y sus servicios (`reactor-y-servicios`, 15 min)
- Carga de materiales e inertización (`carga-e-inertizacion`, 15 min)
- Calor de reacción y reacciones descontroladas (`calor-de-reaccion`, 18 min)
- Extracción líquido-líquido y separación de fases (`extraccion-liquido-liquido`, 15 min)
- Destilación y concentración (`destilacion`, 15 min)
- Cristalización (`cristalizacion`, 18 min)
- Ampliación: El reactor a fondo: agitación, intercambio de calor y protecciones (`reactor-a-fondo`, 38 min)
- Ampliación: Inertización a fondo: por qué, cuánto y cómo se calcula (`inertizacion-a-fondo`, 30 min)

### 7. Filtros (1 lecciones, 12 min)

- Filtros: Nutsche y filtro-secador (`filtros`, 12 min)
- Ampliación: Filtros a fondo: el filtro Nutsche y el filtro-secador agitado, paso a paso (`filtros-a-fondo`, 32 min)

### 8. Centrífugas (1 lecciones, 15 min)

- La centrífuga (`centrifuga`, 15 min)
- Ampliación: La centrífuga a fondo: fuerza G, ciclo completo y qué hacer cuando vibra (`centrifuga-a-fondo`, 30 min)

### 9. Secaderos y salida del producto (3 lecciones, 42 min)

- Secaderos (`secaderos`, 15 min)
- Molienda, micronización y tamizado (`molienda-y-tamizado`, 12 min)
- Envasado y etiquetado del API (`envasado-y-etiquetado`, 15 min)
- Ampliación: El secado a fondo: la curva de secado y cuándo está seco (`secado-a-fondo`, 30 min)

### 10. Servicios de planta (5 lecciones, 69 min)

- Calor, vapor e intercambiadores (`calor-vapor-intercambiadores`, 18 min)
- Frío y refrigeración (`frio-y-refrigeracion`, 12 min)
- Aire comprimido, nitrógeno y vacío (`aire-y-nitrogeno`, 12 min)
- Agua: potable, purificada y para inyectables (`agua-farmaceutica`, 15 min)
- HVAC: aire de las salas y cascada de presiones (`hvac-y-presiones`, 12 min)

### 11. El panel de control (5 lecciones, 78 min)

- Medidas de proceso: temperatura, presión, nivel y caudal (`medidas-de-proceso`, 18 min)
- Diagramas P&ID y nomenclatura de instrumentos (`pid-y-simbologia`, 15 min)
- Lazos de control y controladores PID (`lazos-de-control`, 15 min)
- DCS, PLC, SCADA y recetas (`dcs-scada-recetas`, 15 min)
- Alarmas, enclavamientos y sistemas de seguridad (`alarmas-y-enclavamientos`, 15 min)

### 12. Calidad, limpieza y mantenimiento en el turno (4 lecciones, 66 min)

- Toma de muestras de sólidos y líquidos (`toma-de-muestras`, 15 min)
- Impurezas en el API (`impurezas-ich`, 18 min)
- Limpieza de equipos y validación de limpieza (`limpieza-de-equipos`, 18 min)
- Mantenimiento en entorno GMP (`mantenimiento-gmp`, 15 min)

