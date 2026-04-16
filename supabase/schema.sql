-- Core entities
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  role text not null default 'customer' check (role in ('admin','customer','guest','agent','corporate_client')),
  created_at timestamptz default now()
);

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique references auth.users(id) on delete cascade,
  email text unique not null,
  status text default 'active',
  created_at timestamptz default now()
);

create table if not exists destinations (
  id bigserial primary key,
  name text unique not null,
  country text,
  hero_image text,
  is_trending boolean default false
);

create table if not exists package_categories (
  id bigserial primary key,
  name text unique not null
);

create table if not exists packages (
  id bigserial primary key,
  slug text unique not null,
  title text not null,
  destination_id bigint references destinations(id),
  category_id bigint references package_categories(id),
  duration_days int,
  starting_price numeric(12,2),
  rating numeric(2,1),
  offer_badge text,
  overview text,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists package_itineraries (
  id bigserial primary key,
  package_id bigint references packages(id) on delete cascade,
  day_no int not null,
  title text,
  description text
);

create table if not exists visa_requests (
  id bigserial primary key,
  user_id uuid references auth.users(id),
  country text not null,
  travel_start date,
  travel_end date,
  passport_url text,
  notes text,
  status text default 'new',
  created_at timestamptz default now()
);

create table if not exists custom_trip_requests (
  id bigserial primary key,
  user_id uuid references auth.users(id),
  destination text,
  budget numeric(12,2),
  travelers int,
  travel_start date,
  travel_end date,
  trip_type text,
  special_requests text,
  status text default 'new',
  created_at timestamptz default now()
);

create table if not exists blog_posts (
  id bigserial primary key,
  slug text unique not null,
  title text not null,
  excerpt text,
  content text,
  cover_image text,
  published_at timestamptz,
  author_id uuid references auth.users(id)
);

create table if not exists testimonials (
  id bigserial primary key,
  customer_name text,
  location text,
  rating int,
  quote text,
  is_featured boolean default false
);

create table if not exists newsletter_subscribers (
  id bigserial primary key,
  email text unique not null,
  subscribed_at timestamptz default now()
);

create table if not exists saved_trips (
  id bigserial primary key,
  user_id uuid references auth.users(id) on delete cascade,
  package_id bigint references packages(id) on delete cascade,
  created_at timestamptz default now(),
  unique(user_id, package_id)
);

create table if not exists inquiries (
  id bigserial primary key,
  user_id uuid references auth.users(id),
  name text,
  email text,
  subject text,
  message text,
  status text default 'new',
  created_at timestamptz default now()
);

create table if not exists faqs (
  id bigserial primary key,
  page text,
  question text,
  answer text,
  position int default 0
);

create table if not exists agents (
  id bigserial primary key,
  user_id uuid unique references auth.users(id),
  agency_name text,
  commission_rate numeric(5,2),
  wallet_balance numeric(12,2) default 0,
  created_at timestamptz default now()
);

create table if not exists corporate_clients (
  id bigserial primary key,
  user_id uuid unique references auth.users(id),
  company_name text,
  credit_limit numeric(12,2) default 0,
  created_at timestamptz default now()
);

create table if not exists bookings (
  id bigserial primary key,
  user_id uuid references auth.users(id),
  package_id bigint references packages(id),
  booking_reference text unique,
  total_amount numeric(12,2),
  markup_amount numeric(12,2) default 0,
  commission_amount numeric(12,2) default 0,
  invoice_url text,
  status text default 'pending',
  created_at timestamptz default now()
);

-- RLS
alter table profiles enable row level security;
alter table packages enable row level security;
alter table bookings enable row level security;
alter table inquiries enable row level security;
alter table saved_trips enable row level security;
alter table visa_requests enable row level security;
alter table custom_trip_requests enable row level security;

-- Customer and guest read policies
create policy "public packages read" on packages for select using (is_active = true);

-- Customer ownership policies
create policy "customer own bookings" on bookings for select using (auth.uid() = user_id);
create policy "customer own inquiries" on inquiries for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "customer own saved trips" on saved_trips for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "customer own visa" on visa_requests for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "customer own custom trips" on custom_trip_requests for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Admin policies
create policy "admin full profiles" on profiles for all using (
  exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin')
);
create policy "admin full packages" on packages for all using (
  exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin')
);
create policy "admin full bookings" on bookings for all using (
  exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin')
);

-- Agent policies
create policy "agent booking visibility" on bookings for select using (
  exists (select 1 from agents a where a.user_id = auth.uid())
);

-- Corporate policies
create policy "corporate own bookings" on bookings for select using (
  exists (select 1 from corporate_clients c where c.user_id = auth.uid())
);
