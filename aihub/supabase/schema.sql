-- ============================================================
-- REVA AI Hub — Supabase Schema
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New query)
-- ============================================================

-- ── Tables ───────────────────────────────────────────────────

create table if not exists public.users (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  name text,
  role text default 'faculty' check (role in ('admin', 'faculty')),
  department text,
  avatar text,
  points integer default 0,
  created_at timestamptz default now()
);

create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('course', 'gem', 'prompt', 'artifact')),
  title text not null,
  description text,
  track text,
  level text,
  stage text,
  tool text,
  platform text,
  url text,
  prompt_text text,
  tags text[] default '{}',
  upvotes integer default 0,
  downvotes integer default 0,
  usage_count integer default 0,
  featured boolean default false,
  contributor text,
  status text default 'published' check (status in ('draft', 'published')),
  created_by uuid references public.users(id) on delete set null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.resource_votes (
  user_id uuid references public.users(id) on delete cascade,
  resource_id uuid references public.resources(id) on delete cascade,
  vote text check (vote in ('up', 'down')),
  primary key (user_id, resource_id)
);

create table if not exists public.workshops (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  track text,
  scheduled_at timestamptz,
  capacity integer,
  mode text check (mode in ('online', 'offline', 'hybrid')),
  meeting_url text,
  created_by uuid references public.users(id) on delete set null,
  status text default 'draft' check (status in ('draft', 'published', 'completed')),
  created_at timestamptz default now()
);

create table if not exists public.workshop_enrollments (
  user_id uuid references public.users(id) on delete cascade,
  workshop_id uuid references public.workshops(id) on delete cascade,
  status text default 'enrolled' check (status in ('enrolled', 'attended')),
  enrolled_at timestamptz default now(),
  primary key (user_id, workshop_id)
);

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  track text,
  level text,
  thumbnail_url text,
  created_by uuid references public.users(id) on delete set null,
  status text default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz default now()
);

create table if not exists public.course_enrollments (
  user_id uuid references public.users(id) on delete cascade,
  course_id uuid references public.courses(id) on delete cascade,
  enrolled_at timestamptz default now(),
  completed boolean default false,
  primary key (user_id, course_id)
);

create table if not exists public.course_modules (
  id uuid primary key default gen_random_uuid(),
  course_id uuid references public.courses(id) on delete cascade,
  title text not null,
  description text,
  order_index integer default 0
);

create table if not exists public.course_materials (
  id uuid primary key default gen_random_uuid(),
  module_id uuid references public.course_modules(id) on delete cascade,
  type text check (type in ('ppt', 'pdf', 'video', 'link', 'doc')),
  title text not null,
  file_url text,
  order_index integer default 0
);

create table if not exists public.assignments (
  id uuid primary key default gen_random_uuid(),
  module_id uuid references public.course_modules(id) on delete cascade,
  title text not null,
  description text,
  due_date timestamptz,
  rubric text,
  max_score integer default 100
);

create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  assignment_id uuid references public.assignments(id) on delete cascade,
  user_id uuid references public.users(id) on delete cascade,
  content_text text,
  file_url text,
  submitted_at timestamptz default now(),
  status text default 'submitted' check (status in ('submitted', 'graded')),
  score integer,
  feedback text,
  graded_by uuid references public.users(id) on delete set null,
  graded_at timestamptz
);

create table if not exists public.contributions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade,
  resource_id uuid references public.resources(id) on delete set null,
  type text,
  track text,
  points_awarded integer default 0,
  status text default 'pending' check (status in ('pending', 'approved', 'rejected')),
  reviewer_notes text,
  submitted_at timestamptz default now(),
  reviewed_at timestamptz
);

create table if not exists public.badges (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade,
  badge_type text not null,
  earned_at timestamptz default now()
);

-- ── Auto-update updated_at on resources ──────────────────────

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger resources_updated_at
  before update on public.resources
  for each row execute function public.set_updated_at();

-- ── Auto-create user profile on first sign-in ────────────────

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.users (id, email, name, role, avatar)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.email),
    'faculty',
    new.raw_user_meta_data->>'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ── Enable Row Level Security ─────────────────────────────────

alter table public.users enable row level security;
alter table public.resources enable row level security;
alter table public.resource_votes enable row level security;
alter table public.workshops enable row level security;
alter table public.workshop_enrollments enable row level security;
alter table public.courses enable row level security;
alter table public.course_enrollments enable row level security;
alter table public.course_modules enable row level security;
alter table public.course_materials enable row level security;
alter table public.assignments enable row level security;
alter table public.submissions enable row level security;
alter table public.contributions enable row level security;
alter table public.badges enable row level security;

-- ── RLS Policies ─────────────────────────────────────────────

-- Helper: is current user an admin?
create or replace function public.is_admin()
returns boolean language sql security definer as $$
  select exists (
    select 1 from public.users
    where id = auth.uid() and role = 'admin'
  );
$$;

-- users
create policy "Users can read own row" on public.users
  for select using (auth.uid() = id);

create policy "Authenticated users can read all users" on public.users
  for select using (auth.role() = 'authenticated');

create policy "Users can update own row" on public.users
  for update using (auth.uid() = id);

create policy "Admin can update any user" on public.users
  for update using (public.is_admin());

create policy "Allow insert own row" on public.users
  for insert with check (auth.uid() = id);

-- resources (public read for published, admin full access)
create policy "Anyone can read published resources" on public.resources
  for select using (status = 'published');

create policy "Admin can do everything on resources" on public.resources
  for all using (public.is_admin());

create policy "Faculty can insert draft resources" on public.resources
  for insert with check (auth.uid() = created_by);

-- resource_votes
create policy "Anyone can read votes" on public.resource_votes
  for select using (true);

create policy "Authenticated users can manage own votes" on public.resource_votes
  for all using (auth.uid() = user_id);

-- workshops (public read for published)
create policy "Anyone can read published workshops" on public.workshops
  for select using (status = 'published');

create policy "Admin can do everything on workshops" on public.workshops
  for all using (public.is_admin());

-- workshop_enrollments
create policy "Users can read own enrollments" on public.workshop_enrollments
  for select using (auth.uid() = user_id);

create policy "Users can enroll themselves" on public.workshop_enrollments
  for insert with check (auth.uid() = user_id);

create policy "Users can unenroll themselves" on public.workshop_enrollments
  for delete using (auth.uid() = user_id);

create policy "Admin can read and update all enrollments" on public.workshop_enrollments
  for all using (public.is_admin());

-- courses (authenticated read for published)
create policy "Authenticated users can read published courses" on public.courses
  for select using (auth.role() = 'authenticated' and status = 'published');

create policy "Admin can do everything on courses" on public.courses
  for all using (public.is_admin());

-- course_enrollments
create policy "Users can read own course enrollments" on public.course_enrollments
  for select using (auth.uid() = user_id);

create policy "Users can enroll in courses" on public.course_enrollments
  for insert with check (auth.uid() = user_id);

create policy "Admin can read all course enrollments" on public.course_enrollments
  for select using (public.is_admin());

-- course_modules
create policy "Authenticated users can read modules" on public.course_modules
  for select using (auth.role() = 'authenticated');

create policy "Admin can do everything on modules" on public.course_modules
  for all using (public.is_admin());

-- course_materials
create policy "Authenticated users can read materials" on public.course_materials
  for select using (auth.role() = 'authenticated');

create policy "Admin can do everything on materials" on public.course_materials
  for all using (public.is_admin());

-- assignments
create policy "Authenticated users can read assignments" on public.assignments
  for select using (auth.role() = 'authenticated');

create policy "Admin can do everything on assignments" on public.assignments
  for all using (public.is_admin());

-- submissions
create policy "Users can read own submissions" on public.submissions
  for select using (auth.uid() = user_id);

create policy "Users can insert own submissions" on public.submissions
  for insert with check (auth.uid() = user_id);

create policy "Users can update own ungraded submissions" on public.submissions
  for update using (auth.uid() = user_id and status = 'submitted');

create policy "Admin can read and grade all submissions" on public.submissions
  for all using (public.is_admin());

-- contributions
create policy "Users can read own contributions" on public.contributions
  for select using (auth.uid() = user_id);

create policy "Users can insert contributions" on public.contributions
  for insert with check (auth.uid() = user_id);

create policy "Admin can do everything on contributions" on public.contributions
  for all using (public.is_admin());

-- badges
create policy "Users can read own badges" on public.badges
  for select using (auth.uid() = user_id);

create policy "Admin can do everything on badges" on public.badges
  for all using (public.is_admin());

-- ── Notifications ─────────────────────────────────────────────

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade not null,
  message text not null,
  link text,
  read boolean default false,
  created_at timestamptz default now()
);

alter table public.notifications enable row level security;

create policy "Users read own notifications" on public.notifications
  for select using (auth.uid() = user_id);

create policy "Users update own notifications" on public.notifications
  for update using (auth.uid() = user_id);

create policy "Admin insert notifications" on public.notifications
  for insert with check (public.is_admin());

-- ── Seed: Learning Hub featured resources ────────────────────
insert into public.resources (
  type,
  title,
  description,
  track,
  level,
  stage,
  tool,
  platform,
  url,
  tags,
  upvotes,
  downvotes,
  usage_count,
  featured,
  status
)
select
  'course',
  'AI Prompting for Everyone',
  'Andrew Ng''s practical course on prompt engineering fundamentals, iterative prompting, and real-world use cases for everyday productivity.',
  'Kaizen',
  'Beginner',
  'Learn',
  'Any',
  'DeepLearning.AI',
  'https://www.deeplearning.ai/courses/ai-prompting-for-everyone/',
  array['prompt-engineering', 'andrew-ng', 'deeplearning-ai', 'foundations'],
  96,
  3,
  620,
  true,
  'published'
where not exists (
  select 1
  from public.resources
  where title = 'AI Prompting for Everyone'
    and url = 'https://www.deeplearning.ai/courses/ai-prompting-for-everyone/'
);

-- ── Storage bucket (run separately if needed) ─────────────────
-- Create a bucket named 'course-materials' in Supabase Dashboard
-- Storage → New bucket → Name: course-materials → Public: true
-- Or via SQL:
-- insert into storage.buckets (id, name, public) values ('course-materials', 'course-materials', true);
