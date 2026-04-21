-- Run in Supabase SQL Editor, or: supabase db push (if using Supabase CLI)

create table if not exists public.orders (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now(),
  name text,
  email text,
  phone text,
  notes text,
  shipping text,
  items jsonb,
  supplies jsonb,
  coupon_code text,
  discount numeric default 0,
  subtotal numeric,
  shipping_cost numeric,
  extras_total numeric,
  total numeric,
  status text default 'pending'
);

create table if not exists public.coupons (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now(),
  code text unique not null,
  discount numeric not null,
  used boolean default false
);
