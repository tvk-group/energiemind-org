# energiemind.org

Public mission, research, and sustainability website for **Energiemind**.

## About

Energiemind is an open research and education initiative focused on:

- Energy waste reduction
- Mining heat reuse
- Sustainability research and reporting
- Public education and open resources

This is a **non-commercial** site — no sales, no presale, no shop.

## Languages (25)

Fully localized pages with enterprise SEO (hreflang, canonical, Open Graph, Twitter cards, JSON-LD):

`/en/` `/tr/` `/de/` `/fr/` `/es/` `/it/` `/pt/` `/nl/` `/ar/` `/ru/` `/zh-cn/` `/zh-tw/` `/ja/` `/ko/` `/hi/` `/ur/` `/pl/` `/ro/` `/el/` `/sv/` `/no/` `/da/` `/fi/` `/he/` `/id/`

## Sections

- Mission
- Research
- Mining Heat Reuse
- Energy Waste Reduction
- Sustainability Reports
- Education
- Public Resources
- Contact

## SEO

- Per-locale sitemaps (`/sitemap/en.xml`, etc.) with sitemap index
- `robots.txt` targeting Google, Bing, Yandex, Baidu
- JSON-LD: Organization, WebSite, BreadcrumbList, Article, FAQPage
- Language dropdown with hreflang internal linking
- No Google Translate widgets

## Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000 (redirects to preferred locale).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

**Important:** If you see a Vercel `404: NOT_FOUND` (not the Next.js site), custom domains are not linked to the project. See [DEPLOYMENT.md](DEPLOYMENT.md) for the fix.

Add both `energiemind.org` and `www.energiemind.org` in Vercel → Project Settings → Domains.

## Tech Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- TypeScript

## License

See [LICENSE](LICENSE).
