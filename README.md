# Aula de Química Industrial

App web para aprender química desde cero hasta el trabajo en una planta de principios activos (API), con GMP y ALCOA+.

## Arrancar en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Guardar el progreso en la nube (opcional)

Sin configurar nada, el progreso vive solo en el navegador (localStorage) y se puede exportar e importar desde **/progreso**.
Para que se guarde también en la nube y puedas seguir en otro ordenador:

1. Crea un proyecto gratuito en [supabase.com](https://supabase.com) (región Europa).
2. En el proyecto, abre **SQL Editor**, pega el contenido de `supabase/migrations/20261119000000_progreso_nube.sql` y pulsa **Run**.
   Crea la tabla `progreso` con seguridad por filas: cada usuario solo puede leer y escribir su propia fila.
3. Copia `.env.example` como `.env.local` y pon la **Project URL** y la **publishable key** (o *anon key*) del proyecto
   (botón **Connect** o *Project Settings → API*). Nunca pongas aquí la *secret* / *service_role key*.
4. Reinicia `npm run dev`, entra en **/progreso**, escribe tu email y abre el enlace que te llega **en el mismo navegador**.
   La primera vez se sube lo que ya tenías en el navegador; después se guarda solo cada pocos segundos.

Si este navegador y la nube tienen progresos distintos (por ejemplo, has estudiado en otro ordenador sin sesión),
la app te enseña los dos y eliges cuál conservar. La lógica está en `src/lib/cloud.ts` y se comprueba con `npm run check:cloud`.

## Dónde está cada cosa

- `src/content/`: lecciones (un archivo por nivel). Cada lección tiene idea clave, ejemplo de planta, qué verías en la hoja de producción, vocabulario ES-EN y test.
- `src/app/`: páginas (temario, lección, glosario, calculadoras).
- El progreso se guarda en el navegador (localStorage).

Contenido con ejemplos ficticios. En planta manda siempre el procedimiento vigente.
