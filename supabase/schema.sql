create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  lead_type text not null,
  source_page text not null,
  full_name text not null,
  email text not null,
  phone text,
  message text,
  neighborhood_interest text,
  property_address text,
  price_range text,
  timeline text,
  financing_stage text,
  interest_type text,
  property_type text,
  consent_to_contact boolean not null default false,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.buyer_profiles (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  neighborhood_interest text,
  price_range text,
  timeline text,
  financing_stage text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.seller_profiles (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  property_address text,
  property_type text,
  price_expectation text,
  timeline text,
  selling_goal text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  consultation_type text,
  neighborhood_interest text,
  timeline text,
  notes text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null,
  excerpt text not null,
  read_time text,
  is_featured boolean not null default false,
  download_path text,
  content jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.neighborhoods (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  tagline text,
  summary text,
  best_for text[] not null default '{}',
  housing_stock text[] not null default '{}',
  lifestyle text[] not null default '{}',
  pros text[] not null default '{}',
  tradeoffs text[] not null default '{}',
  buyer_strategy text,
  seller_strategy text,
  featured_metric text,
  faq jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  quote text not null,
  name text not null,
  context text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_type_idx on public.leads (lead_type);
create index if not exists neighborhoods_slug_idx on public.neighborhoods (slug);
create index if not exists resources_slug_idx on public.resources (slug);

alter table public.leads enable row level security;
alter table public.buyer_profiles enable row level security;
alter table public.seller_profiles enable row level security;
alter table public.appointments enable row level security;
alter table public.resources enable row level security;
alter table public.neighborhoods enable row level security;
alter table public.testimonials enable row level security;
alter table public.site_settings enable row level security;

drop policy if exists "anon insert leads" on public.leads;
create policy "anon insert leads" on public.leads
for insert to anon
with check (true);

drop policy if exists "authenticated read leads" on public.leads;
create policy "authenticated read leads" on public.leads
for select to authenticated
using (true);

drop policy if exists "anon insert buyer profiles" on public.buyer_profiles;
create policy "anon insert buyer profiles" on public.buyer_profiles
for insert to anon
with check (true);

drop policy if exists "anon insert seller profiles" on public.seller_profiles;
create policy "anon insert seller profiles" on public.seller_profiles
for insert to anon
with check (true);

drop policy if exists "anon insert appointments" on public.appointments;
create policy "anon insert appointments" on public.appointments
for insert to anon
with check (true);

drop policy if exists "public read resources" on public.resources;
create policy "public read resources" on public.resources
for select to anon, authenticated
using (true);

drop policy if exists "public read neighborhoods" on public.neighborhoods;
create policy "public read neighborhoods" on public.neighborhoods
for select to anon, authenticated
using (true);

drop policy if exists "public read testimonials" on public.testimonials;
create policy "public read testimonials" on public.testimonials
for select to anon, authenticated
using (true);

drop policy if exists "authenticated manage content" on public.resources;
create policy "authenticated manage content" on public.resources
for all to authenticated
using (true)
with check (true);

drop policy if exists "authenticated manage neighborhoods" on public.neighborhoods;
create policy "authenticated manage neighborhoods" on public.neighborhoods
for all to authenticated
using (true)
with check (true);

drop policy if exists "authenticated manage testimonials" on public.testimonials;
create policy "authenticated manage testimonials" on public.testimonials
for all to authenticated
using (true)
with check (true);

drop policy if exists "authenticated manage site settings" on public.site_settings;
create policy "authenticated manage site settings" on public.site_settings
for all to authenticated
using (true)
with check (true);

drop policy if exists "authenticated read buyer profiles" on public.buyer_profiles;
create policy "authenticated read buyer profiles" on public.buyer_profiles
for select to authenticated
using (true);

drop policy if exists "authenticated read seller profiles" on public.seller_profiles;
create policy "authenticated read seller profiles" on public.seller_profiles
for select to authenticated
using (true);

drop policy if exists "authenticated read appointments" on public.appointments;
create policy "authenticated read appointments" on public.appointments
for select to authenticated
using (true);

insert into public.site_settings (key, value)
values
  ('home_hero_headline', '{"text":"A premium real-estate experience for San Francisco buyers and sellers."}'),
  ('home_hero_subheadline', '{"text":"William Zhang helps clients navigate San Francisco neighborhoods, pricing strategy, and next-step decisions with clarity and calm confidence."}')
on conflict (key) do nothing;

