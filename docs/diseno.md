# Sistema de diseño del Aula

Objetivo: que un principiante sepa siempre **dónde está** y **qué hacer a continuación**, sin verlo todo a la vez.
Identidad: papel cálido y tinta azul, cómodo para leer mucho rato. Un único color de señal (ámbar)
marca *tu siguiente paso*, como el piloto de un equipo en planta. Todo lo demás es tranquilo.

## Arquitectura

Barra lateral fija (`src/components/shell/Sidebar.tsx`, configuración en `src/components/shell/nav.ts`) con cuatro zonas:

- **Hoy** (`/`): una sola tarjeta con la siguiente lección, cómo vas y tres prácticas.
- **Aprender**: Ruta del operador, Temario completo (`/temario`), Mapa de planta, Glosario.
- **Practicar**: Simulador de planta, Simulador ERP, Calculadoras, Tarjetas (+ repaso de fallos), Fichas de seguridad.
- **Certificarte**: Certificaciones (+ exámenes, simulacros, autoevaluación, examen ERP).
- Pie de la barra: Buscar (Ctrl K, también busca secciones) y Mi progreso.

## Tokens (src/app/globals.css)

| Uso | Clase Tailwind |
|---|---|
| Fondo de página | `bg-bg` |
| Superficie (tarjetas) | `bg-surface` + `border border-line` |
| Relleno suave | `bg-soft` |
| Texto / secundario | `text-ink` / `text-muted` |
| Acción principal, enlaces | `accent` (`bg-accent`, `text-accent`, `bg-accent-soft`) |
| Tu siguiente paso (solo uno por pantalla) | `signal` / `signal-soft` |
| Correcto / error | `ok`, `ok-soft` / `bad`, `bad-soft` |
| Aviso | `warn-soft` |
| Radio | `rounded-[var(--radius)]` para superficies, `rounded-md` para botones |

Los colores de bloque (`blockColor` en `src/content/blocks.ts`) solo se usan en marcas pequeñas (icono, barra de progreso),
nunca como fondo de secciones grandes.

Tipografía: IBM Plex Sans (texto) e IBM Plex Mono (`font-mono` o `.t-tag`) **solo** para códigos de equipo, lotes y valores de
proceso (R-101, FX-101, 78,5 °C). Escala: `.t-display` (portada), `.t-h1` (título de página), `.t-h2` (sección), `.t-h3`.

## Componentes comunes (src/components/ui/index.tsx)

- `PageHeader` — **toda** página empieza con él: `crumbs` (migas, empezando en la zona: p. ej. `{href:"/certificaciones",label:"Certificaciones"}`),
  `title`, `en` (subtítulo en inglés), `lead` (una o dos frases: qué se hace aquí), `icon`, `actions` (como mucho un botón primario).
- `SectionTitle` — título de sección dentro de una página.
- `Card` — superficie base.
- `btn.primary` / `btn.secondary` / `btn.quiet` — clases de botón. Un solo `btn.primary` visible por pantalla.
- `Bar` — barra de progreso fina. `Status` — pastilla hecho / en curso / pendiente.
- `Disclosure` — plegable para detalles secundarios (cómo funciona, requisitos, fuentes, listas largas).

## Reglas

1. Una idea principal por pantalla. Lo secundario va plegado (`Disclosure`) o en otra página.
2. Nada de etiquetas en MAYÚSCULAS con letra espaciada encima de cada título. Frases en minúscula normal.
3. Nada de «→» pegado al texto de los enlaces; si hace falta, el icono `arrow` dentro de un botón.
4. Textos con verbo y en positivo: «Empezar el lote», no «Lote normal: empezar».
5. Términos técnicos en español con el inglés al lado (`en` del `PageHeader`, o `<span lang="en">`).
6. Ancho de lectura ≤ 70 caracteres (`max-w-[68ch]`) en párrafos largos.
7. Sin animaciones decorativas. Respeta `prefers-reduced-motion`.
8. Contraste AA en claro y oscuro; foco visible (global en `:focus-visible`).
9. No cambiar contenido, lógica, ids ni claves de `localStorage` (`quimica-app:*`): el progreso guardado debe seguir valiendo.
