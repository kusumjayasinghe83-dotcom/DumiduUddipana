-- =====================================================
-- Run in Supabase -> SQL Editor -> New query -> Run
-- Safe to run again (it will not delete any data).
-- Admin UID is already filled in below.
-- =====================================================

-- 1) Site settings (My Brands + Google info), editable from admin.html
create table if not exists public.site_settings (
  key        text primary key,
  value      jsonb not null,
  updated_at timestamptz default now()
);
alter table public.site_settings enable row level security;

drop policy if exists "site_settings public read" on public.site_settings;
create policy "site_settings public read"
  on public.site_settings for select using (true);

drop policy if exists "site_settings admin insert" on public.site_settings;
create policy "site_settings admin insert"
  on public.site_settings for insert to authenticated
  with check (auth.uid() = 'bfce890f-d514-45cf-9833-4b485639f27b');

drop policy if exists "site_settings admin update" on public.site_settings;
create policy "site_settings admin update"
  on public.site_settings for update to authenticated
  using (auth.uid() = 'bfce890f-d514-45cf-9833-4b485639f27b')
  with check (auth.uid() = 'bfce890f-d514-45cf-9833-4b485639f27b');

drop policy if exists "site_settings admin delete" on public.site_settings;
create policy "site_settings admin delete"
  on public.site_settings for delete to authenticated
  using (auth.uid() = 'bfce890f-d514-45cf-9833-4b485639f27b');

-- 2) Contact form + free eBook form
create table if not exists public.contact_messages (
  id bigint generated always as identity primary key,
  name text, email text, message text,
  created_at timestamptz default now()
);
create table if not exists public.ebook_requests (
  id bigint generated always as identity primary key,
  name text, email text,
  created_at timestamptz default now()
);
alter table public.contact_messages enable row level security;
alter table public.ebook_requests enable row level security;

drop policy if exists "anyone can send" on public.contact_messages;
create policy "anyone can send" on public.contact_messages
  for insert to anon, authenticated with check (true);
drop policy if exists "admin can read" on public.contact_messages;
create policy "admin can read" on public.contact_messages
  for select to authenticated
  using (auth.uid() = 'bfce890f-d514-45cf-9833-4b485639f27b');

drop policy if exists "anyone can request" on public.ebook_requests;
create policy "anyone can request" on public.ebook_requests
  for insert to anon, authenticated with check (true);
drop policy if exists "admin can read" on public.ebook_requests;
create policy "admin can read" on public.ebook_requests
  for select to authenticated
  using (auth.uid() = 'bfce890f-d514-45cf-9833-4b485639f27b');
