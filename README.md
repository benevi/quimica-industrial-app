# Aula de Química Industrial

App web para aprender química desde cero hasta el trabajo en una planta de principios activos (API), con GMP y ALCOA+.
Tiene tres partes: el **Aula** (228 lecciones en 22 niveles, muchas de ellas «a fondo», con test, vocabulario y glosario),
el **simulador de planta** (lote completo, reactor R-204 con modelo físico y averías, filtro-secador Nutsche y auditoría de
hojas) y la preparación de **certificaciones** con un simulador de ERP tipo SAP.

Las normas del proyecto, la estructura del código y el estado de cada parte están en [`CLAUDE.md`](CLAUDE.md).

## Arrancar en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000. Antes de arrancar se genera solo el catálogo ligero de lecciones (`npm run gen:catalog`).

## Comprobaciones

```bash
npm run lint
npx tsc --noEmit
npm run check          # catálogo al día y tests de lecciones
npm run check:certs    # bancos de preguntas y supuestos de certificaciones
npm run check:repaso   # tarjetas de repaso y fichas de seguridad
npm run check:media    # imágenes y vídeos con su archivo y sus créditos
npm run check:cloud    # sincronización con la nube
npm run check:sim      # simuladores: lote completo, Nutsche y reactor con sus averías
npm run build
```

## Guardar el progreso en la nube (opcional)

Sin configurar nada, el progreso vive solo en el navegador (localStorage) y se puede exportar e importar desde **/progreso**.

La nube usa una tabla `aula_progreso` en un proyecto de Supabase que ya comparte otra app (ver `CLAUDE.md`: solo se tocan
tablas `aula_*`). Para activarla:

1. Aplica en ese proyecto las migraciones de `supabase/migrations/` (crean `aula_progreso` con seguridad por filas: cada
   usuario solo lee y escribe su propia fila).
2. Copia `.env.example` como `.env.local` y pon la **Project URL** y la **publishable key** (o *anon key*) del proyecto.
   Nunca pongas aquí la *secret* / *service_role key*.
3. Reinicia `npm run dev`, entra en **/progreso** y crea tu cuenta. La primera vez se sube lo que ya tenías en el navegador;
   después se guarda solo. Si el navegador y la nube han cambiado los dos, se fusionan registro a registro
   (`src/lib/cloud.ts` y `src/lib/merge.ts`, comprobado con `npm run check:cloud`).

La librería de Supabase solo se descarga si la nube está configurada.

## Dónde está cada cosa

- `src/content/`: lecciones (`nivelN.ts` y las «a fondo» en `nivelN-tema.ts`), con su tabla de fuentes en `docs/fuentes/`.
- `src/sim/` y `src/components/sim/`: simuladores de planta.
- `src/certs/` y `src/sap/`: certificaciones y simulador de ERP.
- `src/app/`: páginas.
- `docs/`: temario, sistema de diseño, planes y documento de parámetros del simulador del reactor.

Contenido con procesos, productos y equipos ficticios. En planta manda siempre el procedimiento vigente (SOP).
