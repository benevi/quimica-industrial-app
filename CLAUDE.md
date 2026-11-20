# CLAUDE.md

Contexto para Claude Code. Léelo antes de trabajar en este repositorio.

## Qué es este proyecto

**Aula de Química Industrial**: app web para aprender química desde cero (teórica, industrial y de laboratorio)
hasta el trabajo diario en una planta de principios activos farmacéuticos (API, *Active Pharmaceutical Ingredient*).
Tiene tres partes:

1. **Aula**: lecciones cortas con idea clave, ejemplo de planta, qué verías en la hoja de producción,
   vocabulario ES-EN y test. Temario alineado con los ciclos de FP de grado superior (Química Industrial,
   Laboratorio de Análisis y Control de Calidad, Fabricación de Productos Farmacéuticos).
2. **Simulador de planta**: fabricar un lote ficticio siguiendo la hoja de producción (*batch record*),
   registrando datos según GMP y ALCOA+, con alarmas, incidentes, desviaciones y auditoría de hojas.
3. **Certificaciones y SAP**: preparación de certificaciones oficiales (exámenes, simulacros, autoevaluación de
   unidades de competencia, supuestos prácticos) y un simulador de ERP tipo SAP.

## Para quién es (el usuario)

- Victor empieza como **operador de planta** en una empresa de principios activos farmacéuticos y **no sabe química**.
- Tiene un grado superior en **desarrollo web**: entiende código, repos y despliegues.
- Su planta tiene **reactores, centrífugas, secaderos y filtros**: prioriza esos equipos en lecciones y simulador.
- Usa la app en local desde el ordenador.

## Reglas del proyecto

- **Idioma**: todo en español, con el término técnico en inglés al lado la primera vez (p. ej. «hoja de producción (*batch record*)»).
- **Nivel**: formación completa y extensa, como un título oficial. Nada superficial. El contenido es siempre
  didáctico y parte de cero: se da por hecho que quien lee no sabe nada de química.
- **Dos ediciones** (decisión de Victor, noviembre de 2026):
  1. **Edición completa** (esta, la que se está construyendo): solo para Victor, con mucho contenido, para estudiarlo
     todo en profundidad. Es la prioridad. La auditoría de noviembre de 2026 midió 27 horas de estudio frente a las
     610 del certificado QUIE0108 y las 2000 de un ciclo de FP: hay que ampliarla, empezando por reactores,
     centrífugas, filtros y secaderos.
  2. **Edición de operador** (después, cuando la completa esté lista): una versión aparte con solo lo imprescindible
     para trabajar como operador de planta, pensada para presentarla a la empresa de Victor y, si les gusta, que la
     usen las nuevas incorporaciones. Su punto de partida es la ruta del operador (`src/content/operador.ts`).
     No se empieza hasta que Victor lo diga. Sigue valiendo la regla de confidencialidad: nada de datos, documentos
     ni procedimientos reales de la empresa salvo que la empresa los aporte y lo autorice por escrito.
- **Simulador del reactor, lo más realista posible** (petición de Victor, noviembre de 2026): cuando se trabaje en el
  simulador del reactor, el objetivo es practicar lo más cerca posible de la realidad de planta. Eso significa, entre
  otras cosas: un modelo físico creíble (calentar y enfriar con Q = U·A·ΔT y tiempos reales, no minutos; presión que
  responde a temperatura, nitrógeno y vacío; agitación que afecta a la mezcla y al calor; acumulación de reactivo),
  mandos y pantallas como los de un sistema de control real (consignas, modos manual y automático, alarmas con
  prioridades, enclavamientos, tendencias), secuencia completa de una operación (comprobaciones previas,
  inertización con sus ciclos, cargas, adición dosificada, reflujo o destilación, muestreo, descarga, limpieza),
  hoja de producción completa y averías realistas. Los números del modelo tienen que cuadrar entre sí y con las
  lecciones «a fondo» del nivel 12. Proceso, producto y equipos siguen siendo ficticios.
- **Exactitud**: Victor **no puede revisar el contenido técnico**, así que cada dato, norma y cálculo se verifica con
  fuentes fiables (ICH, EudraLex, Farmacopea, CLP/REACH, BOE para títulos de FP, fabricantes) antes de escribirlo.
  Si algo no se puede verificar, no se inventa: se dice.
- **Confidencialidad**: no uses documentos, procedimientos, hojas de producción, nombres de equipos ni datos reales de la
  empresa de Victor. Todo proceso, producto, receta y código de equipo es **ficticio** (p. ej. FX-101, FD-401).
  En planta manda siempre el procedimiento vigente (SOP).
- **Imágenes y vídeos**: solo material con licencia libre (Wikimedia Commons, UNECE para pictogramas GHS, ISO 7010)
  o vídeos de fuentes fiables, con créditos en `src/content/media.ts`.
- **Publicar** (Vercel u otro hosting) o cualquier paso irreversible: solo con el ok explícito de Victor.
  No inscribir ni pagar nada en su nombre.
- **Base de datos**: el progreso en la nube vive en un proyecto de Supabase compartido con otra app de Victor
  (proyecto `kultura-test`). Cambios de esquema **solo en tablas `aula_*`**; no toques las demás tablas.
  Al crear cuenta, un trigger de la otra app crea un perfil en `public.users`: es esperado.
- Nunca subas claves al repo. Van en `.env.local` (ignorado por git).

## Comandos

```bash
npm install
npm run dev            # http://localhost:3000
npm run build          # build de producción
npm run lint
npx tsc --noEmit       # tipos

# Comprobaciones de contenido (ejecuta la que toque según lo que cambies)
npm run check          # tests de lecciones: respuestas numéricas coherentes, slugs únicos
npm run check:certs    # bancos de preguntas, simulacros y supuestos de certificaciones
npm run check:repaso   # tarjetas de repaso y fichas FDS
npm run check:media    # imágenes y vídeos: archivo existe y tiene créditos
npm run check:cloud    # lógica de sincronización con la nube (src/lib/cloud.ts)
npm run check:sim      # simulador de planta: lote completo, informe de QA y Nutsche (src/sim)
```

Antes de dar un cambio por terminado: `npm run lint`, `npx tsc --noEmit`, los `check:*` afectados y `npm run build`.

Variables de entorno (opcionales, solo para la nube): copia `.env.example` a `.env.local` y rellena
`NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` (clave *publishable*, nunca la *service_role*).
Sin ellas la app funciona igual y guarda el progreso en el navegador.

## Dónde está cada cosa

Stack: Next.js 15 (App Router) + React 19 + Tailwind 4 + TypeScript. Contenido como datos TS, sin backend propio.

- `src/app/`: páginas. Rutas principales: `/` (Hoy), `/operador`, `/temario`, `/nivel/[n]`, `/leccion/[slug]`, `/mapa`,
  `/glosario`, `/simulador` (+ `/auditoria`, `/nutsche`), `/sap`, `/calculadoras`, `/tarjetas`, `/repaso`, `/fds`,
  `/certificaciones`, `/examen`, `/simulacro`, `/supuesto`, `/autoevaluacion`, `/progreso`, `/creditos`.
- `src/content/`: lecciones, un archivo por nivel (`nivelN.ts`; las lecciones largas «a fondo» van en `nivelN-tema.ts`; 124 lecciones en 22 niveles, 0–21), tipos en `types.ts`,
  bloques de la ruta en `blocks.ts`, índice en `index.ts`. El contenido de `src/content` manda sobre `docs/temario.md`
  si no coinciden.
  - `operador.ts`: ruta corta del operador (28 lecciones en 7 etapas). Al añadir lecciones clave para el turno, valora sumarlas.
  - `tarjetas.ts`: tarjetas de repaso (ids estables, no renombrar; añadir con id nueva).
  - `fds.ts`: fichas de datos de seguridad ficticias; frases H/P con el texto oficial CLP.
  - `media.ts`: imágenes (`public/media`), señales ISO 7010, vídeos por lección (`lessonMedia`).
- `src/sim/`: motor del simulador. `engine.ts` (lote FX-101, incidentes en `INCIDENTS` + `raise()`), `nutsche.ts`
  (filtro-secador FD-401, modo relevo de turno), `audit.ts` (hojas con errores para auditar, `AUDIT_CASES`), `review.ts`.
- `src/components/sim/`: vista de planta, paneles SCADA de equipos (`Equipment.tsx`), pestañas entre modos (`SimModes.tsx`).
- `src/certs/`: certificaciones. `prep.ts` (temario oficial), `bancos/*` y `casos.ts` (**añadir solo al final**: el índice
  es el id del repaso), `data.ts`, `autoevaluacion.ts`, `useCertState.ts` (Leitner compartido con las tarjetas).
- `src/sap/`: simulador ERP (`engine.ts`) y su examen (`exam.ts`).
- `src/lib/`: `progress.ts` (progreso en localStorage), `backup.ts` (exportar/importar), `cloud.ts` (Supabase).
- `src/components/shell/`: barra lateral y navegación. Una sección nueva se añade en `nav.ts` (también la encuentra el buscador).
- `src/components/ui/index.tsx`: piezas comunes (PageHeader, Card, btn.*, Bar, Status, Disclosure).
- `supabase/migrations/`: SQL de la tabla `aula_progreso` (con RLS).
- `scripts/`: los `check-*.mjs`.
- `docs/fuentes/`: tabla de fuentes de cada lección «a fondo», afirmación por afirmación, con lo que se leyó en la
  página oficial, lo que solo se vio en el buscador y lo que se recalculó. Toda lección nueva lleva la suya.

Convenciones:

- Claves de localStorage siempre con prefijo `quimica-app:` (así entran en la copia de seguridad).
- Toda página nueva empieza con `PageHeader` y sigue `docs/diseno.md`: papel cálido y tinta azul, un solo color de señal
  (ámbar) para el siguiente paso, sin etiquetas en mayúsculas ni flechas «→» en los textos. Victor rechazó el verde.
- Códigos de equipo y productos siempre inventados.

## Documentos de referencia

- `docs/temario.md`: temario completo y su relación con los títulos de FP.
- `docs/diseno.md`: sistema de diseño de la interfaz.
- `docs/plan/plan-app-quimica-industrial.md`: plan original de la app (Aula + simulador).
- `docs/plan/simulador-lotes-gmp.md`: plan de ampliación del simulador (v3) y bocetos en `docs/plan/bocetos-simulador/`.
- `docs/plan/certificaciones-y-sap.md`: ruta de certificaciones oficiales y SAP recomendada a Victor.

Los planes son de noviembre de 2026; parte ya está construida. Compara siempre con el código antes de suponer qué falta.

## Estado y pendientes (noviembre de 2026)

- Hecho: Aula completa (114 lecciones), ruta del operador, simulador (lote FX-101 con válvulas manuales, incidentes,
  paneles de filtro/centrífuga/secadero, Nutsche con relevo de turno, auditoría de hojas), certificaciones y simulador
  ERP, tarjetas y FDS, imágenes y vídeos con licencia, rediseño de la interfaz, progreso en la nube con Supabase.
- Pendiente: fases A–F de `docs/plan/simulador-lotes-gmp.md`; biotecnología (módulos FP 1390/1393) queda fuera del
  temario; revisar si se adoptan los borradores 2025 del Anexo 11 y Anexo 22 de EU GMP y actualizar las lecciones
  `part-11-y-anexo-11` y `sistemas-en-operacion`; publicación en Vercel en curso (requiere pasos de Victor).
