# 🌐 Boss of AI — Website & Web Domain Administration Guide

> **Audience**: IT / Network Support, Web Administrators, and Infrastructure Leads.  
> **Purpose**: One-stop reference for domain registration, DNS records, SSL management, and Vercel cloud hosting for `bossofai.org`.  
> *(The main repository `README.md` is reserved exclusively for core academic, research, and project team members).*

---

## 🏛️ Domain & Hosting Architecture Summary

| Property | Configuration |
| :--- | :--- |
| **Production Domain** | `https://bossofai.org` |
| **Secondary / WWW Domain** | `https://www.bossofai.org` (Redirects to apex) |
| **Hosting Platform** | [Vercel Global Edge Network](https://vercel.com) |
| **Connected GitHub Repo** | `https://github.com/sanchitnis/bossofai` (`main` branch) |
| **Frontend Framework** | React 18, Vite, TypeScript, Tailwind CSS (located in `web/`) |
| **SSL / HTTPS** | Automatic, Zero-Maintenance Let's Encrypt / Google Trust via Vercel |

---

## 📋 DNS Configuration & Records

These DNS records must be configured in your domain registrar (GoDaddy, Namecheap, Google Domains, Cloudflare, etc.) or DNS provider.

### Direct DNS Records Table

| Type | Host / Name | Value / Target | TTL | Description |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `@` (or leave blank) | `76.76.21.21` | `3600` (or Auto) | Points apex `bossofai.org` to Vercel's Anycast Edge IP |
| **CNAME** | `www` | `cname.vercel-dns.com.` | `3600` (or Auto) | Points `www.bossofai.org` to Vercel |
| **CAA** | `@` | `0 issue "letsencrypt.org"` | `3600` | Authorizes Let's Encrypt for automated SSL renewal |
| **CAA** | `@` | `0 issue "pki.goog"` | `3600` | Authorizes Google Trust Services for automated SSL |

---

## 📁 1-Click DNS Import Files

Pre-compiled zone files are available in the repository under [`dns/`](file:///d:/sanjay/bossofai/dns/):

1. **RFC 1035 BIND Zone File**: [`dns/bossofai.org.zone`](file:///d:/sanjay/bossofai/dns/bossofai.org.zone)
   - Use this to **Import DNS Records** directly into Cloudflare, AWS Route 53, Namecheap, DigitalOcean, or BIND servers.
2. **CSV Spreadsheet File**: [`dns/bossofai.org.csv`](file:///d:/sanjay/bossofai/dns/bossofai.org.csv)
   - Use this for registrars supporting CSV bulk import.

---

## ⚙️ Vercel Project Settings (One-Time Setup)

When configuring the project in the [Vercel Dashboard](https://vercel.com):

1. **Root Directory**:
   - Navigate to **Settings** → **Build and Deployment**.
   - Set **Root Directory** to `web`.
   - Set **Framework Preset** to `Vite`.
2. **Assign Custom Domain**:
   - Navigate to **Settings** → **Environments** (or **Domains**).
   - Under **Production**, click **Add Domain** and enter `bossofai.org`.
   - Vercel will verify the DNS records automatically.
3. **Environment Variables (Optional / When Database is live)**:
   - Navigate to **Settings** → **Environment Variables**:
     - `VITE_SUPABASE_URL`: `https://<supabase-project-id>.supabase.co`
     - `VITE_SUPABASE_ANON_KEY`: `<supabase-anon-key>`

---

## 🔒 SSL / TLS Certificate Maintenance

- Certificates are **automatically provisioned and renewed** by Vercel every 90 days.
- No manual certificate installation, `.crt`/`.key` file management, or renewal cron jobs are required.
- If an SSL error appears after a DNS change, allow 5–15 minutes for worldwide DNS propagation and check that the `CAA` records are present.

---

## 🛠️ Ongoing Maintenance & Troubleshooting

| Symptom | Diagnostic Step | Resolution |
| :--- | :--- | :--- |
| Domain shows "Invalid Configuration" in Vercel | Run `nslookup bossofai.org` in terminal | Verify that the `A` record matches `76.76.21.21` and no conflicting old `A` records exist. |
| `www.bossofai.org` fails to load | Check CNAME record in registrar | Ensure `www` points to `cname.vercel-dns.com.` (with a trailing dot if required by registrar). |
| Code pushed to GitHub does not appear | Check Vercel **Deployments** tab | Verify that the GitHub repository is linked and the commit on `main` built successfully without errors. |
| 404 on deep links/sub-pages | Check SPA rewrite rules | Ensure `web/vercel.json` contains route rewrites to `/index.html` (pre-configured in this repo). |
