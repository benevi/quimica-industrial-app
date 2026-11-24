# Sistema de diseño del Aula

Objetivo: que un principiante sepa siempre **dónde está** y **qué hacer a continuación**, sin verlo todo a la vez.

Identidad (rediseño de noviembre de 2026, a petición de Victor): **el mundo visual de una planta de principios activos**.
Papel de plano gris frío, hojas blancas como las de una hoja de producción, tinta de dibujo, el azul de las señales de
obligación (ISO 7010) para las acciones y el **amarillo de seguridad solo para «tu siguiente paso»**, como una señal en
planta. El motivo propio es la **burbuja de instrumento** de los P&ID: un círculo de trazo fino para iconos y pasos
numerados. Sin verde (Victor lo rechazó): lo hecho va en azul petróleo y siempre con su icono.

## Arquitectura

Barra lateral fija (`src/components/shell/Sidebar.tsx`, configuración en `src/components/shell/nav.ts`) con cuatro zonas:

- **Hoy** (`/`): una sola tarjeta con la siguiente lección, cómo vas y tres prácticas.
- **Aprender**: Ruta del operador, Temario completo (`/temario`), Mapa de planta, Glosario.
- **Practicar**: Simulador de planta, Simulador ERP, Calculadoras, Tarjetas (+ repaso de fallos), Fichas de seguridad.
- **Certificarte**: Certificaciones (+ exámenes, simulacros, autoevaluación, examen ERP).
- Pie de la barra: Buscar (Ctrl K, también busca secciones) y Mi progreso.

## Tokens (src/app/globals.css)

| Uso | Clase Tailwind | Claro | Oscuro |
|---|---|---|---|
| Fondo de página (papel de plano) | `bg-bg` | `#eef1f4` | `#0d141b` |
| Superficie (hojas, tarjetas) | `bg-surface` + `border border-line` | `#ffffff` | `#141e28` |
| Relleno suave | `bg-soft` | `#e5eaef` | `#1b2733` |
| Texto / secundario | `text-ink` / `text-muted` | `#15212d` / `#4f5d6b` | `#e6ecf2` / `#a6b3c0` |
| Acción, enlaces, «actual» | `accent` (`bg-accent`, `text-accent`, `bg-accent-soft`) | `#1d4f91` | `#80b4ef` |
| Tu siguiente paso (una por pantalla) | clase `.next-step` | `#f5b400` | `#f7c02e` |
| Hecho | `ok`, `ok-soft` (azul petróleo, nunca verde) | `#1c6680` | `#6cc3dd` |
| Error | `bad`, `bad-soft` | `#b42318` | `#f48a82` |
| Fondo de barras de progreso | `bg-track` | `#c3ccd5` | `#3d4e60` |
| Radio | `rounded-[var(--radius)]` (6 px) en superficies y botones; 2 px en etiquetas | | |

El amarillo no se usa en listas ni en la barra lateral: «actual» o «te toca» va en azul (`bubble-current`,
`<Status kind="doing">`, barra `bg-accent`). Dentro de `.next-step` los colores se recalculan solos (el botón principal
pasa a tinta sobre amarillo): es la única excepción al botón azul.

Los colores de bloque (`blockColor` en `src/content/blocks.ts`) solo se usan en marcas pequeñas, nunca como fondo.

**Tipografía** (`src/lib/fonts.ts`, la usan las dos ediciones):

- **Archivo** semiestrecha (`font-stretch: 87.5%`) para títulos y títulos de tarjeta: el aire de las placas de los equipos.
- **Atkinson Hyperlegible Next** para el texto, a 17 px: diseñada para leerse bien, también con prisa o con poca vista.
- **Atkinson Hyperlegible Mono** (`font-mono`, `.t-tag`) **solo** para códigos de equipo, lotes y valores de proceso
  (R-204, FX-101, 78,5 °C).
- Escala (razón 1,25): `.t-display` (portada), `.t-h1` (título de página), `.t-h2` (sección), `.t-h3`, `.t-card`
  (títulos de tarjetas y de elementos de lista).

**Piezas propias** (en `globals.css`, capa `components`):

- `.bubble` — burbuja de instrumento: `bubble h-8 w-8 text-accent` con un icono o un número. Estados: `bubble-current`
  (anillo azul de 2 px) y `bubble-done` (relleno azul petróleo con check). Nunca cuadrados tintados ni discos grises.
- `.tag` — etiqueta única, rectangular (palabras clave, «a fondo», tipo de examen).
- `.next-step` — panel amarillo de «tu siguiente paso». Uno por pantalla, como mucho.

## Componentes comunes (src/components/ui/index.tsx)

- `PageHeader` — **toda** página empieza con él (en pantallas anchas, la burbuja del icono cuelga en el margen izquierdo y el título queda alineado con el contenido; debajo, una línea fina como la cabecera de un documento): `crumbs` (migas, empezando en la zona: p. ej. `{href:"/certificaciones",label:"Certificaciones"}`),
  `title`, `en` (subtítulo en inglés), `lead` (una o dos frases: qué se hace aquí), `icon`, `actions` (como mucho un botón primario).
- `SectionTitle` — título de sección dentro de una página.
- `Card` — superficie base.
- `btn.primary` / `btn.secondary` / `btn.quiet` — clases de botón. Un solo `btn.primary` visible por pantalla.
- `Bar` — barra de progreso fina, de esquinas casi rectas. `Status` — estado hecho / te toca / pendiente / error, con borde; el estado por defecto (sin empezar) no lleva etiqueta.
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
