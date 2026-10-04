# 🚀 Boss of AI — Vercel Deployment & Hosting Playbook

This document provides a step-by-step guide for deploying the **Boss of AI** web application on **Vercel** with full Supabase integration, Google OAuth, and custom domain setup (`bossofai.org`).

---

## 🏗️ Architecture Overview

The repository is structured as a multi-facet meta-venture workspace:
- **`web/`**: The modern React 18 + TypeScript + Vite + Tailwind CSS web application (the public face of Boss of AI).
- **`supabase/`**: PostgreSQL schema, RLS policies, and Google OAuth user trigger (`schema.sql`).
- **`strategy/`**, **`planning/`**, **`wiki/`**, **`docs/`**, **`outreach/`**: Strategic charters, prompt playbooks, and venture frameworks.

---

## 📋 Deployment Methods

### Option 1: Deploy via Vercel Web Dashboard (Recommended)

1. **Log in to Vercel**: Navigate to [https://vercel.com](https://vercel.com) and log in with your GitHub account.
2. **Import Repository**:
   - Click **"Add New..."** → **"Project"**.
   - Select your GitHub repository: `sanchitnis/bossofai`.
3. **Configure Project Settings**:
   - **Framework Preset**: `Vite`
   - **Root Directory**: Click *Edit* and set to `web` (or leave default if using root `vercel.json`).
   - **Build Command**: `npm run build` (or `cd web && npm run build`)
   - **Output Directory**: `dist` (or `web/dist`)
   - **Install Command**: `npm install`
4. **Configure Environment Variables**:
   In the **Environment Variables** section, add your Supabase credentials:
   - `VITE_SUPABASE_URL`: `https://<your-supabase-project-id>.supabase.co`
   - `VITE_SUPABASE_ANON_KEY`: `<your-supabase-anon-key>`
5. **Deploy**:
   - Click **"Deploy"**. Vercel will build and assign a preview/production URL (e.g. `bossofai.vercel.app`).

---

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```
2. **Login to Vercel**:
   ```bash
   vercel login
   ```
3. **Deploy from `web/`**:
   ```bash
   cd web
   vercel
   ```
4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

---

## ⚙️ Vercel Integrations & Plugins

### 1. Vercel Web Analytics
1. Go to your project in the **Vercel Dashboard**.
2. Click the **"Analytics"** tab and click **"Enable Web Analytics"**.
3. Real-time traffic, geography, and page view metrics will start streaming automatically.

### 2. Vercel Speed Insights
1. In the project dashboard, navigate to **"Speed Insights"**.
2. Click **"Enable Speed Insights"** to track Core Web Vitals (LCP, FID, CLS).

---

## 🌐 Custom Domain Setup (`bossofai.org`)

1. In the Vercel project dashboard, go to **Settings** → **Domains**.
2. Add your custom domains:
   - Primary: `bossofai.org`
   - Redirect / Alias: `www.bossofai.org` (redirects to `bossofai.org` or vice versa)
3. Configure DNS records at your domain registrar (where `bossofai.org` was registered):
   - **Type**: `A` | **Name**: `@` | **Value**: `76.76.21.21`
   - **Type**: `CNAME` | **Name**: `www` | **Value**: `cname.vercel-dns.com`
4. Once DNS propagates (typically 1-5 minutes), Vercel will automatically provision SSL certificates for `bossofai.org`.

---

## 🔒 Security & Edge Caching Configuration

The project includes `web/vercel.json` with pre-configured headers:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- Immutable caching for `/assets/*` static bundles (`max-age=31536000`).
