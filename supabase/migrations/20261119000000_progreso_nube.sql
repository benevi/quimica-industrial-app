-- Progreso del Aula de Química guardado en la nube.
-- Una fila por usuario con todas las claves «quimica-app:*» del navegador (lo mismo que la copia .json).
create table if not exists public.progreso (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  rev integer not null default 1,
  updated_at timestamptz not null default now()
);

alter table public.progreso enable row level security;

-- Cada usuario solo ve y modifica su propia fila.
create policy "progreso: leer el mío" on public.progreso
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "progreso: crear el mío" on public.progreso
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "progreso: actualizar el mío" on public.progreso
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

revoke all on public.progreso from anon;
grant select, insert, update on public.progreso to authenticated;
