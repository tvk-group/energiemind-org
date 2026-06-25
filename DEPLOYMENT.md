# Vercel Deployment Guide

## The 404 is a domain configuration issue

If you see a plain Vercel **404: NOT_FOUND** page (not the Next.js site), the build succeeded but **custom domains are not linked to the project**.

Verify with:

```bash
curl -sI https://www.energiemind.org/ | grep x-vercel-error
```

If you see `x-vercel-error: NOT_FOUND`, DNS points to Vercel but the domain is not assigned to this deployment.

## Fix in Vercel Dashboard

1. Open [Vercel Dashboard](https://vercel.com) → **energiemind-org** project
2. Go to **Settings** → **Domains**
3. Add **both** domains:
   - `energiemind.org`
   - `www.energiemind.org`
4. Set **www.energiemind.org** as the primary domain (recommended)
5. Enable redirect: `energiemind.org` → `www.energiemind.org`
6. Wait for DNS verification (green checkmarks)
7. Go to **Deployments** → latest production deploy → **⋯** → **Promote to Production** (if needed)

## DNS records (already configured)

Both records should point to Vercel:

| Host | Type | Value |
|------|------|-------|
| `@` | A | `216.150.1.1` (or Vercel apex) |
| `www` | CNAME | `cname.vercel-dns.com` |

Your DNS already resolves to Vercel. The missing step is **adding domains in the project settings**.

## After domain setup

These URLs should work:

- `https://www.energiemind.org/` → redirects to `/en`
- `https://www.energiemind.org/en` → English homepage
- `https://www.energiemind.org/tr` → Turkish homepage

## Production branch

Ensure **Production Branch** is set to `main` under Settings → Git.

## Team deployment protection

If the project is under a private Vercel team with **Deployment Protection**, preview URLs require login. Custom domains serving production should not require SSO once domains are correctly assigned to the production deployment.
