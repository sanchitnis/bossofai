# AGENTS.md

This guide complements the README. Use README for quick startup. Use this file for architecture context and safe, consistent code changes.

## Purpose

This repository hosts the REVA AI Hub web app and related learning content. Agents should read this file before editing any individual file so changes stay aligned with architecture, auth model, and data boundaries.

## Quick Project Snapshot

- Frontend app: React + TypeScript + Vite + Tailwind + shadcn/ui
- Routing: react-router-dom
- Data/Auth: Supabase (database, storage, auth via Azure OAuth)
- Server state: TanStack Query
- Extra content site: Docusaurus project under reva-docusaurus/

## Agent Pre-Flight Checklist (Do This First)

1. Confirm scope.
- Identify which surface is being changed: public pages, portal, admin, shared components, data, or docs.

2. Verify impact area.
- Check routes in src/App.tsx.
- Check auth guards (ProtectedRoute/AdminRoute) for access changes.
- Check Supabase schema/policies for data permission changes.

3. Check run commands.
- Dev: npm run dev
- Build: npm run build
- Lint: npm run lint
- Course site (Docusaurus): npm run course:dev / npm run course:build

4. Make smallest safe change.
- Prefer local targeted edits.
- Avoid broad refactors unless requested.

5. Validate.
- Run lint/build if change can affect types or runtime.
- For auth/data changes, validate route protection + expected role behavior.

## Architecture Overview

### 1) App Shell and Providers

- Entry point: src/main.tsx
- Root composition: src/App.tsx
- Providers in use:
  - AuthProvider (session/user/role lifecycle)
  - QueryClientProvider (async state)
  - Tooltip/Toast UI providers

### 2) Routing and Access Model

- Public routes are directly mounted in src/App.tsx.
- Portal routes are wrapped with ProtectedRoute:
  - Requires authenticated Supabase session.
- Admin routes are wrapped with AdminRoute:
  - Requires authenticated session and role === "admin".

### 3) Authentication Flow (Microsoft SSO)

- Triggered by signIn in src/contexts/AuthContext.tsx.
- Uses supabase.auth.signInWithOAuth with provider "azure".
- Callback path: /auth/callback handled by src/pages/auth/AuthCallback.tsx.
- Redirect continuity:
  - Intended path stored in sessionStorage (auth_redirect) before sign-in.
  - Returned and consumed after session exchange.
- User bootstrap:
  - User row is fetched/created in public.users.
  - Default role is faculty unless changed in DB/admin flows.

### 4) Data Layer

- Supabase client singleton: src/lib/supabase.ts
- DB type contracts: src/types/database.ts
- Schema and RLS policies: supabase/schema.sql

Important boundary:
- Frontend route guards improve UX.
- Real authorization is enforced by Supabase Row Level Security policies.

### 5) UI and Feature Organization

- src/pages/:
  - Top-level page routes
  - admin/, auth/, portal/, track/, resources/ feature subfolders
- src/components/:
  - ui/ (shared design system primitives)
  - auth/, layout/, home/, resources/, etc.
- src/hooks/:
  - reusable client hooks (auth, votes, notifications, etc.)
- src/contexts/:
  - app-wide state providers (AuthContext)
- src/data/:
  - static JSON content datasets
- public/:
  - static assets served as-is

## Repository Structure Map

- src/
  - App.tsx: route graph and route-level auth wrapping
  - main.tsx: app bootstrap
  - contexts/AuthContext.tsx: auth/session/user/role state
  - components/auth/: route guards
  - pages/portal/: authenticated user workflows
  - pages/admin/: admin workflows
  - lib/supabase.ts: typed singleton Supabase client
  - types/database.ts: app DB interfaces and unions
- supabase/
  - schema.sql: schema + triggers + RLS policies
- reva-docusaurus/
  - separate Docusaurus course site project
- Developer Essentials/
  - markdown/index content for learning tracks
- build/
  - generated static output (do not hand-edit unless explicitly requested)

## How Agents Should Modify This Repo

### A) Change Routing or Access

- Update src/App.tsx for route wiring.
- If access changes are required:
  - Update ProtectedRoute/AdminRoute behavior as needed.
  - Confirm role semantics in src/types/database.ts and auth context.
  - If data permission behavior changes, update RLS in supabase/schema.sql.

### B) Change Auth Behavior

- Primary files:
  - src/contexts/AuthContext.tsx
  - src/pages/auth/AuthCallback.tsx
  - src/components/auth/ProtectedRoute.tsx
  - src/components/auth/AdminRoute.tsx
- Keep redirect behavior stable unless explicitly requested.
- Preserve user row bootstrap logic unless migration is planned.

### C) Change Portal/Admin Features

- Portal features: src/pages/portal/*
- Admin features: src/pages/admin/*
- Verify Supabase calls align with RLS policies.
- Do not rely only on hidden buttons for security; ensure server-side policy supports intended behavior.

### D) Change Shared UI

- Shared primitives: src/components/ui/*
- Layout/navigation: src/components/layout/*
- Keep visual and interaction patterns consistent with existing Tailwind/shadcn style.

### E) Change Data Types or Supabase Contracts

- Update both:
  - src/types/database.ts
  - supabase/schema.sql (if schema is changing)
- Keep role/status union types in sync with SQL constraints.

## Guardrails and Conventions

- Prefer minimal, scoped edits.
- Keep TypeScript strictness intact; avoid any unless unavoidable.
- Avoid introducing auth or role logic in many places; centralize in context/guards/policies.
- Do not hardcode secrets or env values.
- Respect existing path aliases (@/...) and project style.
- Avoid editing generated output in build/ unless asked.

## Recommended Validation by Change Type

- UI-only changes:
  - npm run dev and basic route smoke test
- Type or logic changes:
  - npm run lint
  - npm run build
- Auth/RLS changes:
  - Validate anonymous vs authenticated vs admin behavior
  - Confirm portal and admin route gating

## High-Risk Files (Review Carefully)

- src/contexts/AuthContext.tsx
- src/pages/auth/AuthCallback.tsx
- src/App.tsx
- src/types/database.ts
- supabase/schema.sql

## When in Doubt

1. Trace from route -> page -> hook/context -> Supabase query -> policy.
2. Prefer explicit permissions over UI assumptions.
3. Ask for clarification before wide architectural refactors.
