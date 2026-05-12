create table if not exists public.teacher_workspaces (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.teacher_workspaces enable row level security;

drop policy if exists "teachers can read own workspace" on public.teacher_workspaces;
create policy "teachers can read own workspace"
on public.teacher_workspaces
for select
using (auth.uid() = user_id);

drop policy if exists "teachers can insert own workspace" on public.teacher_workspaces;
create policy "teachers can insert own workspace"
on public.teacher_workspaces
for insert
with check (auth.uid() = user_id);

drop policy if exists "teachers can update own workspace" on public.teacher_workspaces;
create policy "teachers can update own workspace"
on public.teacher_workspaces
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
