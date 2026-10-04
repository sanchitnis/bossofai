-- ============================================================
-- Boss of AI — Supabase PostgreSQL Schema & Auth Trigger
-- Official Website: https://bossofai.org
-- Run this script in the Supabase SQL Editor (Dashboard -> SQL Editor -> New Query)
-- ============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Users Table (Linked to Supabase Auth & Google OAuth)
create table if not exists public.users (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  name text,
  role text default 'student' check (role in ('student', 'faculty', 'mentor', 'institutional_lead', 'industry_partner', 'admin')),
  institution text,
  avatar text,
  points integer default 50,
  stage text default 'Stage 1' check (stage in ('Stage 1', 'Stage 2', 'Stage 3', 'Stage 4')),
  badge text default 'Brain GYM Cadet',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 2. Audience Inquiries Table (Member / Stakeholder Communication)
create table if not exists public.audience_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  role_type text not null default 'student' check (role_type in ('student', 'faculty', 'mentor', 'hub', 'industry', 'general')),
  organization text,
  message text not null,
  status text default 'new' check (status in ('new', 'reviewed', 'contacted', 'archived')),
  created_at timestamptz default now()
);

-- 3. Broadcast Subscribers Table (Community Announcements)
create table if not exists public.broadcast_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  role_interest text default 'general',
  subscribed_at timestamptz default now()
);

-- 4. Projects & Solutions Table (R&D Probes, SMI Scores, IP)
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  stage text not null default 'Stage 1',
  smi_score numeric(3,1) default 7.5,
  description text not null,
  lead_name text not null,
  institution text,
  github_url text,
  demo_url text,
  upvotes integer default 0,
  status text default 'published' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz default now()
);

-- 5. Leaderboard Entries Table
create table if not exists public.leaderboard_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete set null,
  name text not null,
  institution text not null,
  stage text not null default 'Stage 1',
  points integer default 0,
  velocity text default '+15/wk',
  badge text default 'Brain GYM Active',
  rank integer default 1,
  created_at timestamptz default now()
);

-- 6. Hub Nodes Table (Institutional Governance)
create table if not exists public.hub_nodes (
  id uuid primary key default gen_random_uuid(),
  institution_name text not null,
  executive_sponsor text,
  active_students integer default 0,
  completed_probes integer default 0,
  tier text default 'Academic Hub',
  spocs_count integer default 4,
  created_at timestamptz default now()
);

-- ============================================================
-- Row Level Security (RLS) Policies
-- ============================================================

alter table public.users enable row level security;
alter table public.audience_inquiries enable row level security;
alter table public.broadcast_subscribers enable row level security;
alter table public.projects enable row level security;
alter table public.leaderboard_entries enable row level security;
alter table public.hub_nodes enable row level security;

-- Users: Anyone can read basic user profile; users can update their own
create policy "Users are viewable by everyone" on public.users for select using (true);
create policy "Users can update own profile" on public.users for update using (auth.uid() = id);

-- Audience Inquiries: Anyone can insert inquiries; authenticated admins can view all
create policy "Public can submit audience inquiry" on public.audience_inquiries for insert with check (true);
create policy "Authenticated users can view inquiries" on public.audience_inquiries for select using (auth.role() = 'authenticated');

-- Broadcast Subscribers: Public can subscribe
create policy "Public can subscribe to broadcast" on public.broadcast_subscribers for insert with check (true);
create policy "Authenticated users can view subscribers" on public.broadcast_subscribers for select using (auth.role() = 'authenticated');

-- Projects: Public can view published projects; authenticated can submit
create policy "Public can view published projects" on public.projects for select using (status = 'published');
create policy "Authenticated users can create projects" on public.projects for insert with check (auth.role() = 'authenticated');
create policy "Users can update their projects" on public.projects for update using (auth.role() = 'authenticated');

-- Leaderboard & Hubs: Public can read
create policy "Public can view leaderboard" on public.leaderboard_entries for select using (true);
create policy "Public can view hub nodes" on public.hub_nodes for select using (true);

-- ============================================================
-- Auth Trigger for Automatic User Profile Creation (Google OAuth)
-- ============================================================

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, email, name, avatar, role, points, stage, badge)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', new.email),
    new.raw_user_meta_data->>'avatar_url',
    'student',
    50,
    'Stage 1',
    'Brain GYM Cadet'
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

-- Trigger execution on auth.users insert
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Seed initial seed data for projects, leaderboard, and hubs
insert into public.projects (title, category, stage, smi_score, description, lead_name, institution, upvotes)
values
  ('AI Soil & Pest Diagnostic Probe', 'Agritech R&D Solution', 'Stage 3', 8.2, 'Edge-AI diagnostic tool for smallholder farmers to spot crop disease early without internet connectivity. Patentable IP & Open R&D.', 'Student R&D Team', 'Institute of Technology Hub 1', 42),
  ('Rural Maternal Triage Assistant', 'HealthTech Guild Probe', 'Stage 2', 7.5, 'LLM-augmented decision support app for frontline health workers operating under low-bandwidth constraints.', 'Health-Tech Guild', 'Global Youth STEAM Network', 29),
  ('SrujanaBuddy Learning Companion', 'EdTech DPI & Solution', 'Stage 3', 9.1, 'Open-source peer tutoring platform using Beckn protocol to connect student tutors with learners globally.', 'Student & Faculty Hub', 'National Academic Network', 56)
on conflict do nothing;

insert into public.leaderboard_entries (name, institution, stage, points, velocity, badge, rank)
values
  ('Contributor Lead Alpha', 'Institute of Technology Hub 1', 'Stage 3', 1250, '+45/wk', 'HEITL Master', 1),
  ('Student Researcher Beta', 'Global Youth STEAM Network', 'Stage 2', 980, '+30/wk', 'SPOT-PROBE Specialist', 2),
  ('AI Guild Innovator Gamma', 'Premier Academic Node', 'Stage 2', 820, '+25/wk', 'Brain GYM Pro', 3)
on conflict do nothing;

insert into public.hub_nodes (institution_name, executive_sponsor, active_students, completed_probes, tier, spocs_count)
values
  ('Institute of Technology Hub 1', 'Dr. Academic Director', 45, 12, 'Premier Academic Hub', 4),
  ('Global Youth STEAM Network', 'Dean of Engineering', 30, 8, 'Partner Community Hub', 4),
  ('Innovation Node Delta', 'Director of Innovation', 22, 5, 'Regional Emerging Hub', 4)
on conflict do nothing;
