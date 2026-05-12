# Portfolio Website

Portfolio site built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Sanity](https://www.sanity.io/) for structured content. Everything visitors see is one scrolling page (`/`) with in-page sections.

[Live Demo](https://www.isoaho.se/)

## Stack

- **Next.js** (App Router) · **React** · **Tailwind CSS**
- **Sanity** (`next-sanity`) for projects and the home “Recent work” section
- **EmailJS** for the contact form · **Framer Motion** where motion is used

## Images

<details>
<summary>Click to expand</summary>

![Home Page](/public/preview/home-page.png)  
![About Page](/public/preview/about-page.png)  
![Contact Page](/public/preview/contact-page.png)

</details>

## Routes

| Route | Purpose |
|--------|--------|
| `/` | Single page: hero, `#work` (Sanity), `#about`, `#contact` inside `SiteShell`. |
| `/studio` | Embedded Sanity Studio (catch-all App Router segment). |

Navigation uses hash links (`/#work`, `/#about`, `/#contact`) from `src/app/site-nav.js`, plus an external resume link.

**Legacy URLs:** `next.config.mjs` permanently redirects `/about` → `/#about` and `/contact` → `/#contact` so old bookmarks still land on the right section.

## App Router overview

<details>
<summary>Click to expand</summary>

### `src/app/layout.jsx`

Root layout: global styles, Inter font variable, default SEO metadata and `metadataBase`.

### `src/app/page.jsx`

Home: `SiteShell` wrapping hero, `RecentWork`, `AboutDetails`, and `Form` as sections.

### `src/app/site-nav.js`

`siteNavItems` (hash `href`s), `resumeLink`, and `socialLinks` for header/footer.

### `src/app/studio/[[...tool]]/page.jsx`

Sanity Studio mounted inside the Next app.

</details>

## Components

<details>
<summary>Click to expand</summary>

### `src/components/layout/SiteShell.jsx`

Page frame: background treatments, `SiteHeader`, `<main>`, and `SiteFooter`.

### `src/components/layout/SiteHeader.jsx` · `SiteFooter.jsx`

Sticky glass header with nav from `site-nav.js`; footer with social links.

### `src/components/home/RecentWork.jsx`

Server component: loads home cards via `getHomeWork()` and renders `#work`.

### `src/components/about/index.jsx`

`AboutDetails` — profile sections and stats for the `#about` section.

### `src/components/contact/Form.jsx`

Contact form (react-hook-form + EmailJS + toasts).

### `src/lib/portfolioGrid.js`

Layout helpers for the work grid.

</details>

## Sanity

<details>
<summary>Click to expand</summary>

### `sanity.config.js` · `sanity.cli.js`

Studio and CLI configuration (project ID, dataset, plugins such as `structureTool` and `visionTool`).

### `src/sanity/schemaTypes/`

`blockContentType`, `categoryType`, `projectType`, `homeWorkType` (home cards), aggregated in `index.js`.

### `src/sanity/structure.js`

Studio sidebar: **Recent work (home)** first, then categories and projects.

### `src/sanity/lib/`

- `client.js` — `next-sanity` client (`NEXT_PUBLIC_SANITY_*` env vars).
- `image.js` — image URL builder.
- `homeWork.js` — query/fetch for home work cards.

</details>

## Local development

```bash
npm install
npm run dev
```

Set `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `NEXT_PUBLIC_SANITY_API_VERSION` so the work section and GROQ-backed content resolve at build/runtime.

Scripts: `dev`, `build`, `start`, `lint` (see `package.json`).
