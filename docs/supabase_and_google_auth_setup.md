# ⚡ Supabase & Google Auth Setup Guide for Boss of AI

This guide details how to configure your **Supabase** backend and enable **Google OAuth** authentication for the **Boss of AI** (bossofai.org) web application.

---

## 1. Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and create an account / log in.
2. Click **"New Project"**, name it `bossofai-db`, choose a secure database password and region (e.g. `ap-south-1` for India / Singapore).
3. Once provisioned, navigate to **Project Settings** → **API**:
   - Copy **Project URL** (e.g. `https://xyzcompany.supabase.co`).
   - Copy **anon / public key**.

---

## 2. Execute SQL Database Schema

1. In your Supabase Dashboard, click **SQL Editor** in the left sidebar.
2. Click **"New query"**.
3. Copy the entire contents of [`supabase/schema.sql`](../supabase/schema.sql) and paste it into the editor.
4. Click **"Run"**.
5. This automatically creates:
   - `users` table with roles & stage tracking.
   - `audience_inquiries` table for member messaging.
   - `broadcast_subscribers` table for newsletter updates.
   - `projects` table for R&D probe showcase.
   - `leaderboard_entries` & `hub_nodes` tables.
   - `on_auth_user_created` trigger for Google OAuth sign-in.
   - Row Level Security (RLS) policies.

---

## 3. Configure Google OAuth Credentials

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project named **Boss of AI Auth**.
3. Navigate to **APIs & Services** → **OAuth consent screen**:
   - User Type: **External**
   - App name: **Boss of AI**
   - Support email: `sanjay.chitnis@gmail.com`
   - Authorized domains: `supabase.co`, `vercel.app`, and `bossofai.org`
4. Navigate to **Credentials** → **Create Credentials** → **OAuth Client ID**:
   - Application type: **Web application**
   - Name: **Boss of AI Web Client**
   - **Authorized redirect URIs**:
     - Go to Supabase Dashboard → **Authentication** → **Providers** → **Google**.
     - Copy the **Callback URL (for OAuth)** (e.g. `https://<project-ref>.supabase.co/auth/v1/callback`).
     - Paste this URL into Google Cloud Console under Authorized redirect URIs.
5. Copy the generated **Client ID** and **Client Secret**.

---

## 4. Enable Google Provider in Supabase

1. In Supabase Dashboard, navigate to **Authentication** → **Providers** → **Google**.
2. Toggle Google to **Enabled**.
3. Paste the **Client ID** and **Client Secret**.
4. In **Authentication** → **URL Configuration**:
   - **Site URL**: `https://bossofai.org` (or `https://bossofai.vercel.app` / `http://localhost:8080` during development).
   - **Redirect URLs**: Add `https://bossofai.org/auth/callback`, `https://bossofai.vercel.app/auth/callback`, and `http://localhost:8080/auth/callback`.
5. Click **Save**.

---

## 5. Configure Local & Production Environment Variables

### In Local Development (`web/.env`):
```env
VITE_SUPABASE_URL=https://<your-project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<your-anon-key>
```

### In Vercel:
Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` under **Project Settings** → **Environment Variables**.
