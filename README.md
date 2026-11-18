# Aula de Química Industrial

App web para aprender química desde cero hasta el trabajo en una planta de principios activos (API), con GMP y ALCOA+.

## Arrancar en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Dónde está cada cosa

- `src/content/`: lecciones (un archivo por nivel). Cada lección tiene idea clave, ejemplo de planta, qué verías en la hoja de producción, vocabulario ES-EN y test.
- `src/app/`: páginas (temario, lección, glosario, calculadoras).
- El progreso se guarda en el navegador (localStorage).

Contenido con ejemplos ficticios. En planta manda siempre el procedimiento vigente.
