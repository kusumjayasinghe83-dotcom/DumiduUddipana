-- =====================================================
-- Run this ONCE in Supabase  ->  SQL Editor  ->  New query
-- =====================================================
-- 1) First create/login your own account on the site (register.html).
-- 2) Supabase -> Authentication -> Users -> copy YOUR user "UID".
-- 3) Replace bfce890f-d514-45cf-9833-4b485639f27b below (keep the quotes), then Run.

create table if not exists public.site_settings (
  key        text primary key,
  value      jsonb not null,
  updated_at timestamptz default now()
);

alter table public.site_settings enable row level security;

-- everybody can READ (needed so the public home page can show the brands)
drop policy if exists "site_settings public read" on public.site_settings;
create policy "site_settings public read"
  on public.site_settings for select
  using (true);

-- only YOU can add / change / delete
drop policy if exists "site_settings admin insert" on public.site_settings;
create policy "site_settings admin insert"
  on public.site_settings for insert to authenticated
  with check (auth.uid() = 'bfce890f-d514-45cf-9833-4b485639f27b');

drop policy if exists "site_settings admin update" on public.site_settings;
create policy "site_settings admin update"
  on public.site_settings for update to authenticated
  using      (auth.uid() = 'bfce890f-d514-45cf-9833-4b485639f27b')
  with check (auth.uid() = 'bfce890f-d514-45cf-9833-4b485639f27b');

drop policy if exists "site_settings admin delete" on public.site_settings;
create policy "site_settings admin delete"
  on public.site_settings for delete to authenticated
  using (auth.uid() = 'bfce890f-d514-45cf-9833-4b485639f27b');
