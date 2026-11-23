-- Ajustes de la tabla del progreso (solo tablas aula_*).
-- 1) Tope de tamaño: una fila de progreso real ocupa pocos kB; 1 MB deja margen de sobra y evita abusos.
alter table public.aula_progreso
  add constraint aula_progreso_data_max check (pg_column_size(data) < 1048576);

-- 2) Los permisos efectivos quedan como dice la migración inicial: leer, crear y actualizar la fila propia.
--    En Supabase el rol authenticated recibe ALL por defecto; se retira lo que la app no usa (borrar, truncar…).
revoke all on public.aula_progreso from authenticated;
grant select, insert, update on public.aula_progreso to authenticated;
