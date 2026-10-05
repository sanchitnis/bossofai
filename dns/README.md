# 🌐 DNS Import Records for `bossofai.org`

> **Note**: This directory contains raw import files specifically for IT / network support and domain registrar configuration.  
> For full setup, Vercel edge configuration, and maintenance procedures, see the comprehensive [Website & Domain Administration Guide](file:///d:/sanjay/bossofai/docs/website_and_domain_guide.md).

---

## 📁 Import Files

- **[`bossofai.org.zone`](file:///d:/sanjay/bossofai/dns/bossofai.org.zone)**: Standard RFC 1035 BIND Zone file (Cloudflare, AWS Route 53, Namecheap).
- **[`bossofai.org.csv`](file:///d:/sanjay/bossofai/dns/bossofai.org.csv)**: CSV format for registrars supporting spreadsheet import.

---

## 📋 Direct DNS Records

| Type | Host / Name | Target / Value | TTL | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | `3600` | Vercel Anycast Edge IP |
| **CNAME** | `www` | `cname.vercel-dns.com.` | `3600` | Points `www` subdomain to Vercel |
| **CAA** | `@` | `0 issue "letsencrypt.org"` | `3600` | Authorizes Let's Encrypt SSL |
| **CAA** | `@` | `0 issue "pki.goog"` | `3600` | Authorizes Google Trust SSL |
